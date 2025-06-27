'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CourseCards from './pages/products/page';
import DiscoverPage from './pages/discover/page';
import ContactForm from './pages/contactform/page';
import '@fontsource/roboto/500.css';


export default function Home() {
  const [heroText, setHeroText] = useState('');
  const message = 'MACSOFT';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setHeroText(message.slice(0, i + 1));
      i++;
      if (i === message.length) clearInterval(interval);
    }, 80);
  }, []);

  useEffect(() => {
    localStorage.setItem("userRole", "student");
    const storedRole = localStorage.getItem("userRole");
    console.log("Role:", storedRole);
  }, []);

  useEffect(() => {
    localStorage.setItem("key", "value");
    const data = localStorage.getItem("key");
    console.log("Stored data:", data);
  }, []);


  return (
    <>
   
      <main className="min-h-screen bg-[#f1f1f1] text-black">
                
        <CourseCards /> 
        <DiscoverPage />   
        <ContactForm />
  

      </main>

    </>
  );
}
