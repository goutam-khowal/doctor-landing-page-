// "use client";

// import { useEffect, useState } from "react";
// // images
// import Image from "next/image";
// import phoneImage from "@/assets/images/appointment-discount-phone-mockup.png";
// import smritiLogo from "@/assets/images/smriti-Logo.png";
// import sLetterImg from "@/assets/images/s-letter.png";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import Navbar from "./Navbar";

// const navigation = [
//   { name: "Services", href: "#" },
//   { name: "Testimonials", href: "#testimonials" },
//   { name: "Appointments", href: "#" },
//   { name: "Contact Us", href: "#contact" },
//   { name: "About Us", href: "#" },
// ];

// export default function Header() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <div className="bg-white flex flex-col justify-center lg:flex-row items-center border-2 lg:-mt-6">
//       <header className="absolute inset-x-0 top-0 z-50">
//         <Navbar />
//       </header>

//       <div className="relative isolate px-6 pt-14 lg:px-8 ">
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         >
//           <div
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//             className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//           />
//         </div>

//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//             <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//               Delivering compassionate, proven healthcare you can trust.{" "}
//               <a href="#" className="font-semibold text-indigo-600">
//                 <span aria-hidden="true" className="absolute inset-0" />
//                 Read more <span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>
//           <div className="text-center">
//             <div className="">
//               <Button
//                 className="overflow-hidden"
//                 variant="ghost"
//                 size="icon"
//                 onClick={toggleTheme}
//               >
//                 {theme === "light" ? (
//                   <Moon
//                     className="h-[1.2rem] w-[1.2rem] fill-[#FFCC33] text-[#FFCC33] translate-y-0  dark:translate-y-[150%]
//                   duration-300
//                   transition-all"
//                   />
//                 ) : (
//                   <Sun
//                     className="h-[1.2rem] w-[1.2rem] fill-[#FFCC33] text-[#FFCC33] translate-y-[150%]  dark:translate-y-0
//                   duration-300
//                   transition-all"
//                   />
//                 )}
//                 <span className="sr-only">Toggle theme</span>
//               </Button>
//             </div>
//             <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
//               Personalized Care with{" "}
//               <span className="text-indigo-600">Dr. SN</span>
//             </h1>
//             <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
//               Your health, our priority — offering trusted medical consultations
//               and compassionate care for a healthier tomorrow.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <a
//                 href="#"
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Book Appointment
//               </a>
//               <a href="#" className="text-sm/6 font-semibold text-gray-900">
//                 Learn more <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//         >
//           <div
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//             className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//       </div>
//       <div className="w-full lg:w-fit mx-auto  flex items-center justify-center relative ">
//         <Image
//           src={phoneImage}
//           alt={"phone image"}
//           className="w-64 md:w-96 h-auto "
//         />

//         <button
//           className="bg-indigo-600 w-32 text-xs py-2 md:w-42
//         text-white shadow-xs
//         md:text-base font-[inter] font-semibold rounded-md  hover:bg-indigo-500 hover:scale-[.97] active:bg-[#581eb1] active:scale-[.97] mx-auto transition-all duration-200 absolute bottom-[18%] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Book Appointment
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
// images
import Image from "next/image";
import phoneImage from "@/assets/images/appointment-discount-phone-mockup.png";
import phoneImageDark from "@/assets/images/appointment-discount-phone-mockup-dark.png";
import smritiLogo from "@/assets/images/smriti-Logo.png";
import sLetterImg from "@/assets/images/s-letter.png";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navbar from "./Navbar";

const navigation = [
  { name: "Services", href: "#" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Appointments", href: "#" },
  { name: "Contact Us", href: "#contact" },
  { name: "About Us", href: "#" },
];

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [phoneImg, setPhoneImg] = useState(phoneImage);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    resolvedTheme === "dark"
      ? setPhoneImg(phoneImageDark)
      : setPhoneImg(phoneImage);
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="bg-white dark:bg-gray-900 flex flex-col justify-center lg:flex-row items-center border-2 lg:-mt-6 dark:border-gray-700">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-600/50">
              Delivering compassionate, proven healthcare you can trust.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <div className="">
              <Button
                className="overflow-hidden"
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <Moon className="h-[1.2rem] w-[1.2rem] fill-[#FFCC33] text-[#FFCC33] translate-y-0 dark:translate-y-[150%] duration-300 transition-all" />
                ) : (
                  <Sun className="h-[1.2rem] w-[1.2rem] fill-[#FFCC33] text-[#FFCC33] translate-y-[150%] dark:translate-y-0 duration-300 transition-all" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-100 sm:text-7xl">
              Personalized Care with{" "}
              <span className="text-indigo-600">Dr. SN</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-300 sm:text-xl/8">
              Your health, our priority — offering trusted medical consultations
              and compassionate care for a healthier tomorrow.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book Appointment
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="w-full lg:w-fit mx-auto flex items-center justify-center relative ">
        <Image
          src={phoneImg}
          alt={"phone image"}
          className="w-64 md:w-96 h-auto "
        />

        <button
          className="bg-indigo-600 w-32 text-xs py-2 md:w-42 
        text-white shadow-xs
        md:text-base font-[inter] font-semibold rounded-md hover:bg-indigo-500 hover:scale-[.97] active:bg-[#581eb1] active:scale-[.97] mx-auto transition-all duration-200 absolute bottom-[18%] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
