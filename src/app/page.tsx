"use client";

import Image from "next/image";
import Topnav from "./components/topnav";
import { FlipWords } from "./components/flipwords";
import { Arapey } from 'next/font/google';
import Link from "next/link";
import { StickyScroll } from "./components/ai-for-you";
import Footer from "./components/footer";

const arapey = Arapey({ subsets: ['latin'], weight: '400' });



const content = [
  {
    title: "Introducing AI4U, Your Ultimate Style Companion",
    description:
      "AI4U isn’t just an algorithm—it’s your personal guide to effortless fashion. Designed to deliver tailored recommendations, AI4U helps you build a wardrobe that’s perfectly aligned with your style, body, and lifestyle. Whether you’re revamping your closet or searching for the ideal look, AI4U makes every choice seamless and uniquely yours.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Personalized Styling Made Simple",
    description:
      "AI4U is your style-savvy partner, understanding your preferences like no one else. Powered by advanced AI, it curates outfits tailored to your taste, whether for a casual day or a special event. With AI4U, dressing your best has never been easier.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Smarter with Every Interaction",
    description:
      "AI4U evolves with you. Each interaction helps it refine its recommendations, adapting to your changing style. Enjoy a dynamic, personalized experience with fresh outfit ideas that grow with your unique fashion journey.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Let AI4U Guide Your Shopping",
    description:
      "AI4U is your shopping companion. Preview how new pieces fit your wardrobe and style before you buy. Accessible via our app and browser extension, AI4U works seamlessly with hundreds of stores to elevate your shopping experience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];





export default function Home() {

  

  const firstword = ["Wear", "Feel"];

  return (
    <div className="">
      <Topnav />

      <div className="flex border-black border-t-2 min-h-[91vh]">
        <div className="w-1/2 border-black   bg-white">
          <div className="flex flex-col p-10 text-9xl text-black dark:text-black">
            <div className={arapey.className}>
              <FlipWords words={firstword} />
              <h1 className="text-[#942D24]">Good.</h1>
            </div>
            <span className="text-lg mt-10 mb-10">Personalized fashion and beauty, made <br /> for you. Discover your perfect fit today!</span>
            <button  className="text-lg w-[10rem] h-[3rem] px-4 py-1 bg-[#942D24] text-white rounded ">
              <Link href={"/signup"} className="w-full h-full">
              Sign up
              </Link>
              </button>
          </div>          
        </div>

        <div className="relative flex justify-center items-center w-1/2  bg-[#942D24]">
          <div className="relative">
            <Image
              src={"/Home/Showcase.png"}
              alt="Showcase"
              width={300} // Adjust size as needed
              height={300} // Adjust size as needed
              objectFit="contain" // Keeps image inside container without cropping
            />

          </div>
            {/* Top Left */}
            <Image
              src={"/Home/tlbr.png"}
              alt="Star Top Left"
              width={150}
              height={150}
              className="absolute top-2 left-20"
            />

            {/* Top Right */}
            <Image
              src={"/Home/tr.png"}
              alt="Star Top Right"
              width={100}
              height={100}
              className="absolute top-9 right-32"
            />

            {/* Bottom Left */}
            <Image
              src={"/Home/bl.png"}
              alt="Star Bottom Left"
              width={80}
              height={80}
              className="absolute bottom-9 left-32"
            />

            {/* Bottom Right */}
            <Image
              src={"/Home/tlbr.png"}
              alt="Star Bottom Right"
              width={150}
              height={150}
              className="absolute bottom-2 right-20"
            />
        </div>
      </div>

      
      <div className="relative ">

        <StickyScroll content={content}/>
      </div>
      

      <Footer />
      
    </div>
  );
}
