import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-[#005FF9] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left section - Contact, Enrol, About */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Contact Us */}
            <div>
              <h6 className="text-lg font-semibold mb-4">Contact Us</h6>
              <div className="flex flex-col space-y-2">
                <Link 
                  href="https://wa.me/27600872748?text=Hello%20AIE%20(Academic%20Institute%20of%20Excellence)" 
                  className="hover:underline"
                >
                  WhatsApp: +27 78 457 4027
                </Link>
                <Link href="/page?id=10" className="hover:underline">
                  GP: +27 78 151 5716
                </Link>
               
                <Link href="/page?id=10" className="hover:underline">
                  macprinters4@gmail.com
                </Link>
                <Link href="/complimentComplaint" className="hover:underline">
                  Compliment & Complaint
                </Link>
                <Link href="/page?id=38" className="hover:underline">
                  Our Store/ Offices
                </Link>
                <Link href="/page?id=10" className="hover:underline">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Enrol */}
            <div>
              <h6 className="text-lg font-semibold mb-4">Orders</h6>
              <div className="flex flex-col space-y-2">
                <Link href="/appointmentPage" className="hover:underline">
                  Schedule a Consultant
                </Link>
                <Link 
                  href="/" 
                  className="hover:underline"
                >
                  Express Orders
                </Link>
                <Link href="/page?id=11" className="hover:underline">
                  Graphics
                </Link>
                <Link href="/upcomingOpenDays" className="hover:underline">
                  Mobile Apps
                </Link>
                <Link href="/page?id=12" className="hover:underline">
                  Web Development
                </Link>
                <Link href="/page?id=18" className="hover:underline">
                  Software Assessement/ Dev
                </Link>
                <Link href="/page?id=31" className="hover:underline">
                  Printing Services
                </Link>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h6 className="text-lg font-semibold mb-4">About Us</h6>
              <div className="flex flex-col space-y-2">
                <Link href="/page?id=33" className="hover:underline">
                  Specialised Labs
                </Link>
                <Link href="/page?id=27" className="hover:underline">
                  Testimonies
                </Link>
                <Link href="/page?id=38" className="hover:underline">
                  Our Offices
                </Link>
                
                <Link href="/page?id=5" className="hover:underline">
                  About Us
                </Link>
                <Link href="/employerWorkplacePlacement" className="hover:underline">
                  Contact Us
                </Link>                
               
              </div>
            </div>
          </div>

          {/* Right section - Logo and Social */}
          <div className="flex flex-col items-center md:items-start space-y-4 mt-8 md:mt-0 md:w-64">
            <Image
              src="/logo.png"
              alt="Macprinters Logo"
              width={180}
              height={70}
              className="object-contain"
            />
            
            <h6 className="text-lg font-semibold">Follow us</h6>
            
            <div className="flex space-x-4">
              <Link 
                href="https://www.facebook.com/" 
                className="text-white hover:text-blue-200"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </Link>
              <Link 
                href="/" 
                className="text-white hover:text-blue-200"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </Link>
              <Link 
                href="https://www.youtube.com/" 
                className="text-white hover:text-blue-200"
              >
                <i className="fab fa-youtube text-2xl"></i>
              </Link>
              <Link 
                href="https://www.instagram.com/" 
                className="text-white hover:text-blue-200"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </Link>
            </div>
            
            <div className="flex items-center space-x-2">
              <i className="far fa-envelope"></i>
              <span>macprinter4@gmail.com</span>
            </div>
            
            <div className="text-center text-sm border border-white px-2 py-1 rounded">
              Software Developer & Printing 
            </div>
          </div>
        </div>

        <hr className="border-white my-6" />

        <div className="text-center">
          <p>Copyright © MacPrinters. 2026 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
