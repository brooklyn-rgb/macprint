import Image from 'next/image';
import Link from 'next/link';
import { usePopup } from '../../context/PopupContext';

export default function PromotionBanner() {
     const { openPopup } = usePopup();
  return (
    <div className="grid overflow-hidden md:grid-cols-2 lg:h-full lg:max-h-[500px] lg:place-w-full">
      <div className="w-full justify-center bg-gradient-to-br from-[#00897B] to-white opacity-65 md:flex">
        <Image
          src="/images/sportsboys.webp"
          width={1250}
          height={1080}
          alt="promotion-card"
          className="h-auto w-full object-cover lg:w-[860px]"
        />
      </div>

      <div className="w-full bg-gradient-to-br from-[#00897B] to-white opacity-65 flex justify-center py-12">
        <div className="w-full max-w-[720px] space-y-6 p-8 text-center">
          <div className="space-y-4">
            <h3 className="uppercase text-blue-600 font-bold text-lg">Registration In Progress</h3>
            <h2 className="text-3xl font-bold text-[#000000]">Hurry up! Free Packages Available</h2>
            <p className="text-gray-700">
              👉 Limited seats available. Enroll today and claim your exclusive free package!
            </p>
          </div>

          <Link href="/registration">
            <button className="mt-4 bg-[#1a5722] text-white py-2 px-6 rounded-full font-semibold hover:bg-red-700 transition">
                <button onClick={() => openPopup('newsletter')}>
                Enrol Now
                </button>             
            </button>
          
          </Link>
        </div>
      </div>
    </div>
  );
}
