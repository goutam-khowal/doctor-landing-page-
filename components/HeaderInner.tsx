import React, { useEffect, useMemo, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { headerText } from "@/data/cta";

const HeaderInnerComp = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const phoneImg = useMemo(
    () =>
      resolvedTheme === "dark"
        ? headerText.phoneImage.src.dark
        : headerText.phoneImage.src.light,
    [resolvedTheme]
  );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-320 mx-auto">
      <div className="mx-auto max-w-2xl py-32 sm:py-16 lg:py-24 ">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-600/50">
            {headerText.announcement.text}
            <a
              href={headerText.announcement.link.href}
              className="font-semibold text-indigo-600"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              {headerText.announcement.link.text}
              <span aria-hidden="true">&rarr;</span>
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
            {headerText.title.prefix}
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
                {headerText.cta.secondary.text}
                <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Phone */}
      <div className="w-full lg:w-fit mx-auto flex items-center justify-center relative ">
        <Image
          src={phoneImg}
          alt={headerText.phoneImage.alt}
          className="w-64 md:w-96 h-auto "
        />

        <button
          className="bg-indigo-600 w-32 text-xs py-2 md:w-42 
          text-white shadow-xs
          md:text-base font-[inter] font-semibold rounded-md hover:bg-indigo-500 hover:scale-[.97] active:bg-[#581eb1] active:scale-[.97] mx-auto transition-all duration-200 absolute bottom-[18%] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Link
            className="-m-1.5 p-1.5 cursor-pointer"
            href={headerText.cta.primary.href}
          >
            {headerText.cta.primary.text}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeaderInnerComp;
