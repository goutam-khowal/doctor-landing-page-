"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// images
import Image from "next/image";
import sLetterImg from "@/assets/images/s-letter.png";
import sLetterDarkImg from "@/assets/images/s-letter-darkTheme.png";
import { useTheme } from "next-themes";
import { navbarText, navigationItems } from "@/data/navbar";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [navImg, setNavImg] = useState(sLetterImg);
  const [mounted, setMounted] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (resolvedTheme) {
      if (resolvedTheme === "dark") {
        setNavImg(sLetterDarkImg);
      } else {
        setNavImg(sLetterImg);
      }
    }
  }, [resolvedTheme]);

  if (!mounted) return null;

  return (
    <>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8 dark:bg-gray-900 absolute w-full z-50"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 cursor-pointer">
            <span className="sr-only">Your Company</span>
            <Image
              alt="S Letter"
              src={navImg}
              className="h-8 w-auto"
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") {
                  setIsLogoHovered(true);
                }
              }}
              onPointerLeave={(e) => {
                if (e.pointerType === "mouse") {
                  setIsLogoHovered(false);
                }
              }}
            />

            <span
              className={`absolute z-50 left-20 top-0 h-full px-10 flex items-center 
    transition-all duration-300 ease-in-out text-gray-900 dark:text-gray-300 font-semibold italic text-xs
    ${isLogoHovered ? "opacity-80 translate-x-0" : "opacity-0 -translate-x-5"}
  `}
            >
              <p className="outline-1 shadow-xl bg-white dark:bg-gray-700 px-4 py-2 rounded-2xl ">
                {" "}
                &ldquo;{navbarText.doctorName}&rdquo;
              </p>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">{navbarText.openMenu}</span>
            <Bars3Icon aria-hidden="true" className="size-6 cursor-pointer" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12  lg:items-center ">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900  lg:dark:text-slate-500
              lg:dark:hover:opacity-[.9]
              hover:text-gray-500

              transition-all
              duration-200 cursor-pointer
              "
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={navbarText.login.href}
            className="text-sm/6 font-semibold text-gray-900  lg:dark:text-slate-500
              lg:dark:hover:opacity-[.9]
              hover:text-gray-500

              transition-all
              duration-200 cursor-pointer
          "
          >
            {navbarText.login.text}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10
            dark:bg-gray-900 dark:text-slate-500
            bg-white text-gray-900
            `}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 cursor-pointer">
              <span className="sr-only">{navbarText.companyName}</span>
              <Image
                alt="S Letter"
                src={navImg}
                className="h-8 w-auto"
                title={navbarText.doctorName}
              />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className={`-m-2.5 rounded-md p-2.5 
               dark:bg-gray-900 dark:text-slate-500
            bg-white text-gray-900  
              `}
            >
              <span className="sr-only">{navbarText.closeMenu}</span>
              <XMarkIcon aria-hidden="true" className="size-6 cursor-pointer" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold transition-all duration-200  dark:bg-gray-900 dark:text-slate-500
            bg-white text-gray-900 `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold transition-all duration-200 
                   
                       dark:bg-gray-900 dark:text-slate-500
            bg-white text-gray-900`}
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}

export default Navbar;
