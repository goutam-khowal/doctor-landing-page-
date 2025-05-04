"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// images
import Image from "next/image";
import sLetterImg from "@/assets/images/s-letter.png";
import sLetterDarkImg from "@/assets/images/s-letter-darkTheme.png";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Services", href: "#" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Appointments", href: "/booking" },
  { name: "Contact Us", href: "#contact" },
  { name: "About Us", href: "#" },
  { name: "Admin", href: "/admin" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [navImg, setNavImg] = useState(sLetterImg);

  useEffect(() => {
    resolvedTheme === "dark"
      ? setNavImg(sLetterDarkImg)
      : setNavImg(sLetterImg);
  });

  return (
    <>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8 lg:dark:bg-gray-900 absolute w-full z-50"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 cursor-pointer">
            <span className="sr-only">Your Company</span>
            <Image alt="S Letter" src={navImg} className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 cursor-pointer" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12  lg:items-center ">
          {navigation.map((item) => (
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
            href="#"
            className="text-sm/6 font-semibold text-gray-900  lg:dark:text-slate-500
              lg:dark:hover:opacity-[.9]
              hover:text-gray-500

              transition-all
              duration-200 cursor-pointer
          "
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      {/* <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="" src={sLetterImg} className="h-8 w-auto" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog> */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${
            theme === "dark"
              ? "bg-gray-900 text-slate-500"
              : "bg-white text-gray-900"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 cursor-pointer">
              <span className="sr-only">Your Company</span>
              <Image alt="S Letter" src={navImg} className="h-8 w-auto" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className={`-m-2.5 rounded-md p-2.5 ${
                theme === "dark" ? "text-slate-300" : "text-gray-700"
              }`}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6 cursor-pointer" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold transition-all duration-200 ${
                      theme === "dark"
                        ? "text-slate-500 hover:opacity-90"
                        : "text-gray-900 hover:bg-gray-50 cursor-pointer"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold transition-all duration-200 ${
                    theme === "dark"
                      ? "text-slate-500 hover:opacity-90"
                      : "text-gray-900 hover:bg-gray-50"
                  }`}
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
