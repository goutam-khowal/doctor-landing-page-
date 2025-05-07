import React, { useEffect, useMemo, useState } from "react";
import phoneImage from "@/assets/images/appointment-discount-phone-mockup.png";
import phoneImageDark from "@/assets/images/appointment-discount-phone-mockup.png";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { headerText } from "@/data/header";

const HeaderInnerComp = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const phoneImg = useMemo(
    () => (resolvedTheme === "dark" ? phoneImageDark : phoneImage),
    [resolvedTheme]
  );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-600/50">
            {headerText.announcement.text}{" "}
            <a
              href={headerText.announcement.link.href}
              className="font-semibold text-indigo-600"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              {headerText.announcement.link.text}{" "}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          {/* ... theme toggle button ... */}
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-100 sm:text-7xl">
            {headerText.title.prefix}{" "}
            <span className="text-indigo-600">
              {headerText.title.highlight}
            </span>
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-300 sm:text-xl/8">
            {headerText.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={headerText.cta.primary.href}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {headerText.cta.primary.text}
            </Link>
            <Button className="h-full" variant={"ghost"}>
              <Link
                href={headerText.cta.secondary.href}
                className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100"
              >
                {headerText.cta.secondary.text}{" "}
                <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-fit mx-auto flex items-center justify-center relative ">
        <Image
          src={phoneImg}
          alt={headerText.phoneImage.alt}
          className="w-64 md:w-96 h-auto "
        />
      </div>
    </>
  );
};

export default HeaderInnerComp;
