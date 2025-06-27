'use client';

import Link from 'next/link';
import Image from 'next/image';

type Course = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  programs: {
    title: string;
    link: string;
  }[];
};

const courses: Course[] = [
  {
    id: '1',
    title: 'Pamphlets| Flyers',
    description:
      'Pamphlets, Flyers and Brochure Printing.',
    imageUrl: '/banner/flyers.png',
    link: '/',
    programs: [
      { title: 'Brochures', link: '/flyers' },
      { title: 'Pamphlets', link: '/flyers' },
      { title: 'Flyers', link: '/flyers' },
      { title: 'Business Cards', link: '/flyers' },
    ],
  },
  {
    id: '2',
    title: 'Pullup Banners',
    description:
      'We Design & Print all sort of Banners.',
    imageUrl: '/banner/pul2.png',
    link: '/',
    programs: [
      { title: 'Pullup Banners', link: '/' },
      { title: 'PVC Banners', link: '/' },
      { title: 'Vynl Banners', link: '/' },
      { title: 'Mockup Banners', link: '/' },
      
    ],
  },
  {
    id: '3',
    title: 'Stickers',
    description:
      'All Kinds of Stickers.',
    imageUrl: '/banner/helment.jpg',
    link: '/',
    programs: [
      { title: 'Vynl Sticker Printing', link: '/' },
      { title: 'Pruduction Stickers Printing', link: '/' },
      { title: 'Bottle Stickers', link: '/' },
      { title: 'Water Bottle Stickers Printing', link: '/' },
      { title: 'UV Sticker Printing', link: '/' },
    ],
  },
  {
    id: '4',
    title: 'Sublimation Printing',
    description:
      '',
    imageUrl: '/banner/pnt2.jpg',
    link: '/',
    programs: [
      { title: '', link: '/' },
      {
        title: 'T-shirt Printing',
        link: '/',
      },
      {
        title: 'Sublimation T-shirts',
        link: '/',
      },
      {
        title: 'DTF Sublimation',
        link: '/',
      },
    ],
  },
  {
    id: '5',
    title: 'Gazebo | Mockup',
    description:
      '',
    imageUrl: '/banner/mockup.png',
    link: '/',
    programs: [
      { title: 'Mockup Banners', link: '/' },
      { title: 'Gazebo', link: '/' },
      { title: 'Flags', link: '/' },
    ],
  },
  {
    id: '6',
    title: 'Mobile App | Web Design',
    description:
      'Specializing in frame-works like; React, React Native, Asp.Net Core etc. Web Development, Software development and assessments',
    imageUrl: '/banner/app2.png',
    link: '/',
    programs: [
      { title: 'Mobile Apps', link: '/' },
      { title: 'Website Design/ Developement', link: '/' },
      { title: 'CMS Development', link: '/' },
      { title: 'Saas Development and maintinance', link: '/' },
      { title: 'Portal Development', link: '/' },
      { title: '', link: '/' },
    ],
  },
];

export default function CourseCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-24 place-items-center text-black">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white text-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col lg:flex-row w-full lg:w-[700px] h-[620px]"
        >
          {/* Image */}
          <div className="relative w-full h-[200px] lg:h-full lg:w-1/3">
            <Image
              src={course.imageUrl}
              alt={course.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
          </div>

          {/* Content */}
          <div className="p-6 lg:w-2/3 flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2 text-black">{course.title}</h3>
            <p className="text-black mb-4">{course.description}</p>

            <div className="mb-6 flex-grow text-black">
              <ul className="space-y-3">
                {course.programs.map((program, index) => (
                  <li key={index} className="flex items-start text-black">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5 mr-2"
                      viewBox="0 0 25 21"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeMiterlimit="10"
                        strokeWidth="0.9"
                        d="M15.683 19.905h-.262q-.01-.003-.02-.004a1.76 1.76 0 0 1-.78-.256 1.8 1.8 0 0 1-.616-.637l-1.13-1.956-1.561-2.704-1.575-2.729a1.8 1.8 0 0 1-.236-.77q0-.02-.01-.038v-.165a.1.1 0 0 0 .01-.044 1.78 1.78 0 0 1 1.51-1.637q.072-.008.146-.017.012-.001.025-.005h.188l.024.006a1.77 1.77 0 0 1 1.428.895l1.575 2.725 1.306 2.263 1.386 2.401q.12.208.183.44c.026.104.047.207.05.314q.001.012.004.023v.227l-.004.03c-.002.022 0 .042-.003.063a1.75 1.75 0 0 1-.708 1.227q-.405.3-.908.345-.012.001-.022.004"
                      />
                      <path
                        strokeMiterlimit="10"
                        strokeWidth="0.9"
                        d="M6.81 19.902q-.011-.008-.025-.008a1.77 1.77 0 0 1-.985-.446 1.75 1.75 0 0 1-.526-.857 1.8 1.8 0 0 1-.061-.518q.013-.45.238-.84l.43-.744 2.103-3.642 1.466-2.539.276-.478a1.78 1.78 0 0 1 1.683-.881 1.776 1.776 0 0 1 1.398 2.665l-.42.729-1.817 3.145-1.463 2.534-.574.996a1.76 1.76 0 0 1-1.19.852 1 1 0 0 1-.146.023.1.1 0 0 0-.032.009zM.45 10.474a.04.04 0 0 0 .016-.023A1.78 1.78 0 0 1 2.264 8.78h4.26a1.75 1.75 0 0 1 1.017.31 1.77 1.77 0 0 1 .777 1.476 1.75 1.75 0 0 1-.284.958 1.76 1.76 0 0 1-1.346.81 2 2 0 0 1-.2.007H2.282q-.123.001-.244-.013a1.784 1.784 0 0 1-1.57-1.655.04.04 0 0 0-.018-.027v-.171Zm21.674.284q-.009.014-.01.033a1 1 0 0 1-.04.229 1.78 1.78 0 0 1-1.768 1.32h-4.208a1.8 1.8 0 0 1-.706-.13 1.782 1.782 0 0 1 .26-3.384q.13-.031.263-.041a2 2 0 0 1 .188-.007h4.236a1.76 1.76 0 0 1 .873.221 1.78 1.78 0 0 1 .896 1.26q.006.03.005.063a.1.1 0 0 0 .01.038v.398z"
                      />
                    </svg>
                    <Link href={program.link} className="text-black hover:underline">
                      {program.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={course.link}
              className="inline-block px-6 py-2 bg-[#901a1a] text-white rounded-md hover:bg-yellow-700 transition-colors duration-300 text-center w-full"
            >
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
