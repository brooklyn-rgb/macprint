"use client";
import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Card,
  CardMedia,
  CardContent,
  Button,
  styled,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// Styled components
const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4, 0),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 620,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    width: 700,
  },
}));

const StyledCardMediaWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 140,
  backgroundColor: theme.palette.grey[200],
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    width: 200,         // fixed width on desktop
    height: '100%',     // full height to match card
    flexShrink: 0,
  },
}));

// Removed unnecessary styles for CardMedia since we're using component="img"
const StyledCardMedia = styled(CardMedia)({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
});

const Badge = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  borderRadius: '12px',
  padding: theme.spacing(0.5, 1),
  fontSize: '0.75rem',
  marginLeft: theme.spacing(1),
}));

const SeeMoreButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'normal',
  textTransform: 'none',
  marginTop: theme.spacing(1),
}));

// Data model
interface School {
  id: number;
  title: string;
  image: string;
  bgColor?: string;
  qualificationsCount: number;
  categoriesCount: number;
  programs: Program[];
}

interface Program {
  id: number;
  title: string;
  link: string;
}

// Sample data
const schools: School[] = [
  {
    id: 1,
    title: 'Web Development',
    image: '/programs/vertical.png',
    bgColor: '#C70039',
    qualificationsCount: 8,
    categoriesCount: 5,
    programs: [
      { id: 1, title: '', link: '/' },
      { id: 2, title: '', link: '/' },
      { id: 3, title: '', link: '/' },
      { id: 4, title: '', link: '/' },
      { id: 5, title: '', link: '/' },
      { id: 6, title: '', link: '/' },
      { id: 7, title: '', link: '/' },
      { id: 8, title: '', link: '/' },
    ],
  },
  {
    id: 2,
    title: 'Graphics',
    image: '/programs/vertical.png',
    bgColor: '#0ca4e1',
    qualificationsCount: 7,
    categoriesCount: 4,
    programs: [
      { id: 9, title: '', link: '/' },
      { id: 10, title: '', link: '/' },
      { id: 11, title: '', link: '/' },
      { id: 12, title: '', link: '/' },
      { id: 13, title: '', link: '/' },
      { id: 14, title: '', link: '/' },
      { id: 15, title: '', link: '/' },
    ],
  },
  {
    id: 3,
    title: 'Sublimation',
    image: '/programs/vertical.png',
    bgColor: '#27ae60',
    qualificationsCount: 6,
    categoriesCount: 3,
    programs: [
      { id: 16, title: '', link: '/' },
      { id: 17, title: '', link: '/' },
      { id: 18, title: '', link: '/' },
      { id: 19, title: '', link: '/' },
      { id: 20, title: '', link: '/' },
      { id: 21, title: '', link: '/' },
    ],
  },
  {
    id: 4,
    title: 'Books Printing',
    image: '/programs/vertical.png',
    bgColor: '#e67e22',
    qualificationsCount: 5,
    categoriesCount: 4,
    programs: [
      { id: 22, title: '', link: '/' },
      { id: 23, title: '', link: '/' },
      { id: 24, title: '', link: '/' },
      { id: 25, title: '', link: '/' },
      { id: 26, title: '', link: '/' },
    ],
  },
];

export default function DiscoverPage() {
  const [interest, setInterest] = useState<string>('');
  const [expandedPrograms, setExpandedPrograms] = useState<{ [key: number]: boolean }>({});

  const handleInterestChange = (event: SelectChangeEvent<string>) => {
    setInterest(event.target.value);
  };

  const togglePrograms = (schoolId: number) => {
    setExpandedPrograms((prev) => ({
      ...prev,
      [schoolId]: !prev[schoolId],
    }));
  };

  return (
    <StyledContainer maxWidth={false} sx={{ px: { xs: 2, lg: 12 }, py: 4 }}>
      <Box mb={4}>
        <Box textAlign="start" mb={4}>
  <Typography variant="h2" component="h2" gutterBottom>
    Branding Your Future...
  </Typography>

  <Box display="flex" alignItems="start" justifyContent="center">
    <Typography variant="body1" mr={2}>
      I am interested in
    </Typography>


            <FormControl variant="standard" sx={{ minWidth: 250 }}>
              <InputLabel id="interest-label"></InputLabel>
              <Select
                labelId="interest-label"
                value={interest}
                onChange={handleInterestChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Choose your area of interest' }}
                IconComponent={ArrowDropDownIcon}
                sx={{
                  '& .MuiSelect-select': {
                    fontStyle: !interest ? 'italic' : 'normal',
                    color: !interest ? 'text.secondary' : 'text.primary',
                  },
                }}
              >
                <MenuItem value="" disabled>
                  <em>Choose your area of interest</em>
                </MenuItem>
                <MenuItem value="engineering">System Development</MenuItem>
                <MenuItem value="business">Software Integration</MenuItem>
                <MenuItem value="architecture">Mobile App Development</MenuItem>
                <MenuItem value="it">Website Dev/ Maintainance</MenuItem>
                <MenuItem value="art">Saas Development</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box
  display="grid"
  gap={3}
  gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
>
  {schools.map((school) => (
    <Box key={school.id} minWidth={0}>
              <StyledCard>
                <StyledCardMediaWrapper sx={{ backgroundColor: school.bgColor }}>
                  <CardMedia
                    component="img"
                    image={school.image}
                  alt={school.title}
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  />
                </StyledCardMediaWrapper>

                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box mb={2}>
                    <Typography 
      variant="h6" 
      component="h3" 
      gutterBottom
      sx={{ color: 'black', fontWeight: 'bold', p: 4 }}  // added styles here
    >
                      {school.title}
                    </Typography>

                    <Box display="flex" mb={2}>
                      <Typography variant="body2" mr={3}>
                        Branding <Badge>{school.qualificationsCount}+</Badge>
                      </Typography>
                      <Typography variant="body2">
                        graphics <Badge>{school.categoriesCount}</Badge>
                      </Typography>
                    </Box>

                    <List dense>
                      {school.programs
                        .slice(0, expandedPrograms[school.id] ? school.programs.length : 3)
                        .map((program) => (
                          <ListItem key={program.id} disableGutters>
                            <ListItemIcon sx={{ minWidth: 32, mr: 1 }}>
                              <svg width="25" height="21" viewBox="0 0 25 21" fill="none" stroke="#005FF9">
                                <path
                                  d="M1 10.5L8.5 18L24 1"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  component="a"
                                  href={program.link}
                                  color="inherit"
                                  sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                >
                                  {program.title}
                                </Typography>
                              }
                            />
                          </ListItem>
                        ))}

                      {school.programs.length > 3 && (
                        <ListItem disableGutters>
                          <SeeMoreButton startIcon={<AddCircleOutlineIcon />} onClick={() => togglePrograms(school.id)}>
                            {expandedPrograms[school.id] ? 'See Less' : 'See More'}
                          </SeeMoreButton>
                        </ListItem>
                      )}
                    </List>
                  </Box>

                  {/* Button container to push button to bottom */}
                  <Box sx={{ mt: 'auto', p: 2 }}>
  <Button
    variant="contained"
    color="secondary"
    href={`/schools/${school.id}`}
    sx={{
      textTransform: 'none',
      borderRadius: 0,
      fontWeight: 600,
      width: {
        xs: '100%',
        lg: '100%',
      },
      textAlign: 'center',  // this centers the text inside the button
    }}
  >
    Talk To Our Team
  </Button>
</Box>

                </CardContent>
              </StyledCard>
            </Box>
          ))}
        </Box>
      </Box>
    </StyledContainer>
  );
}
