"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Drawer,
  List,
  ListItem,
  Collapse,
  Typography,
  Box,
} from "@mui/material";
import {
  Search as SearchIcon,
  ArrowForward as ArrowForwardIcon,
  Phone as PhoneIcon,
  Edit as EditIcon,
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";

// ✅ Types
type DropdownItem = {
  text: string;
  href: string;
  icon?: string;
};

type MenuItemType = {
  title: string;
  href: string;
  hasDropdown: boolean;
  icon?: React.ReactNode;
  dropdownItems?: DropdownItem[];
  dropdownContent?: React.ReactNode;
};

export default function Navbar() {
  const [language, setLanguage] = useState<"en" | "af">("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openMobileMenus, setOpenMobileMenus] = useState<{ [key: string]: boolean }>({});

  const menuRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: "en" | "af" | null
  ) => {
    if (newLanguage !== null) setLanguage(newLanguage);
  };

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleMenuOpen = (menu: string, event: React.MouseEvent<HTMLElement>) => {
    setActiveMenu(menu);
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setActiveMenu(null);
    setAnchorEl(null);
  };

  const toggleMobileMenu = (menuKey: string) => {
    setOpenMobileMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  // ✅ Typed menuItems
  const menuItems: MenuItemType[] = [
    {
      title: "Home",
      href: "/",
      hasDropdown: false,
    },
    {
      title: "Dtf Printing",
      href: "/",
      hasDropdown: true,
      dropdownContent: (
        <div className="menu-desktop-big">
          <div className="schools-menu-content">
            <div className="schools-list">{/* Schools list */}</div>
            <div className="qualifications-list">{/* Qualifications list */}</div>
          </div>
        </div>
      ),
    },
    {
      title: "About Us",
      href: "/",
      hasDropdown: true,
      dropdownItems: [
        { text: "About MacPrinters", href: "/page?id=33" },
        { text: "Who We're", href: "/page?id=27" },
        { text: "Potfolio", href: "/page?id=38" },
        { text: "FAQ", href: "/page?id=39" },
        { text: "Refund Policy", href: "/page?id=14" },
        { text: "Shipping", href: "/page?id=6" },
        { text: "Journal", href: "/page?id=5" },
        { text: "Payments", href: "/employerWorkplacePlacement" },
        { text: "Help", href: "/" },
      ],
    },
    {
      title: "Websites",
      href: "/page?id=20",
      hasDropdown: false,
    },
    {
      title: "Contact Us",
      icon: <PhoneIcon />,
      href: "/",
      hasDropdown: true,
      dropdownItems: [
        {
          text: "WhatsApp: +27 (0)78 151 5176",
          href: "https://wa.me/27781515716?text=Hello%20AIE%20(Academic%20Institute%20of%20Excellence)",
          icon: "/icons/chat.svg",
        },
        {
          text: "GP: +27 (0)78 151 5176",
          href: "/page?id=10",
          icon: "/icons/phone-icon.svg",
        },
        {
          text: "JHB: +27 (0)78 151 5176",
          href: "/page?id=10",
          icon: "/icons/signal.svg",
        },
        {
          text: "macprinters4@gmail.com",
          href: "/page?id=10",
          icon: "/icons/email.svg",
        },
        {
          text: "Compliment & Complaint",
          href: "/complimentComplaint",
          icon: "/icons/compliant.svg",
        },
        {
          text: "Our Location",
          href: "/page?id=38",
          icon: "/icons/location.svg",
        },
        {
          text: "Contact Us",
          href: "/page?id=10",
          icon: "/icons/contact.svg",
        },
      ],
    },
    {
      title: "Printing Products",
      icon: <EditIcon />,
      href: "/",
      hasDropdown: true,
      dropdownItems: [
        { text: "Sublimation", href: "/" },
        { text: "T-Shirt Printing", href: "/appointmentPage" },
        { text: "Vinyl Banners", href: "/page?id=11" },
        { text: "PVC Banners", href: "/upcomingOpenDays" },
        { text: "Vehical Branding", href: "/page?id=12" },
        { text: "DTF Printing", href: "/page?id=18" },
        { text: "Brochures", href: "/page?id=31" },
        { text: "Banners", href: "/page?id=31" },
        { text: "Calenders", href: "/page?id=31" },
        { text: "Gazebo", href: "/page?id=31" },
        { text: "Flags", href: "/page?id=31" },
        { text: "Invoice", href: "/page?id=31" },
        { text: "Business Cards", href: "/page?id=31" },
        { text: "Stickers ", href: "/page?id=31" },
      ],
    },
  ];

  return (
    <>
      <AppBar position="fixed" elevation={4} sx={{ bgcolor: "#901a1a" }}>
        <Container maxWidth={false} disableGutters sx={{ p: 0 }}>
          <Toolbar sx={{ display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: { xs: 2, md: 24 }, // 16px on mobile, 48px on desktop
              py: 1, opacity: 60, }}>

            <Link href="/">
              <Box sx={{ position: "relative", width: 180, height: 100 }}>
                <Image src="/banner/logo.png" alt="Logo" fill style={{ objectFit: "contain" }} />
              </Box>
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
              <Box component="form" sx={{ position: "relative", mr: 2 }}>
                <SearchIcon sx={{ position: "absolute", top: "50%", left: 8, transform: "translateY(-50%)" }} />
                <input
                  placeholder="Search…"
                  style={{ paddingLeft: 32, height: 32, borderRadius: 4, color: 'white', border: "1px solid #ccc" }}
                />
                <IconButton type="submit" sx={{ position: "absolute", right: 0, top: 0, color: 'white', height: "100%" }}>
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
              {menuItems.map((item, index) => (
                <Box key={index}>
                  <Button
                    onClick={(e) => item.hasDropdown && handleMenuOpen(`menu-${index}`, e)}
                    endIcon={item.icon}
                    sx={{ color: "white", textTransform: "white" }}
                  >
                    {item.title}
                  </Button>
                  {item.hasDropdown && (
                    <Menu
                      anchorEl={anchorEl}
                      open={activeMenu === `menu-${index}`}
                      onClose={handleMenuClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                      transformOrigin={{ vertical: "top", horizontal: "left" }}
                      TransitionProps={{ timeout: 300 }}
                    >
                      {item.dropdownItems?.map((dropdownItem, i) => (
                        <MenuItem component={Link} href={dropdownItem.href} key={i} onClick={handleMenuClose}>
                          {dropdownItem.icon && (
                            <ListItemIcon>
                              <Image src={dropdownItem.icon} alt="" width={20} height={20} />
                            </ListItemIcon>
                          )}
                          <ListItemText>{dropdownItem.text}</ListItemText>
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
              ))}
              <ToggleButtonGroup value={language} exclusive onChange={handleLanguageChange} size="small">
                <ToggleButton value="en">EN</ToggleButton>
                <ToggleButton value="af">AF</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <IconButton onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        transitionDuration={300}
        PaperProps={{ sx: { width: 280, bgcolor: "#0ca4e1", color: "white", p: 2 } }}
      >
        <List>
          {menuItems.map((item, index) => (
            <Box key={index}>
              {item.hasDropdown ? (
                <>
                  <ListItem onClick={() => toggleMobileMenu(`mobile-${index}`)}>
                    <ListItemText>{item.title}</ListItemText>
                    {openMobileMenus[`mobile-${index}`] ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openMobileMenus[`mobile-${index}`]}>
                    {item.dropdownItems?.map((di, i) => (
                      <ListItem component={Link} href={di.href} key={i} onClick={handleDrawerToggle}>
                        {di.icon && (
                          <ListItemIcon>
                            <Image src={di.icon} alt="" width={20} height={20} style={{ filter: 'invert(1)', opacity: 0.9 }}  />
                          </ListItemIcon>
                        )}
                        <ListItemText>{di.text}</ListItemText>
                      </ListItem>
                    ))}
                  </Collapse>
                </>
              ) : (
                <ListItem component={Link} href={item.href} onClick={handleDrawerToggle}>
                  <ListItemText>{item.title}</ListItemText>
                </ListItem>
              )}
            </Box>
          ))}
          <Divider sx={{ my: 2 }} />
          <Box sx={{ px: 2 }}>
            <Typography variant="subtitle2">Language</Typography>
            <ToggleButtonGroup
              value={language}
              exclusive
              onChange={handleLanguageChange}
              size="small"
              fullWidth
            >
              <ToggleButton value="en">EN</ToggleButton>
              <ToggleButton value="af">AF</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </List>
      </Drawer>
    </>
  );
}
