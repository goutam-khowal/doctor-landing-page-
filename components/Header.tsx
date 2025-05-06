"use client";

import Navbar from "./Navbar";
import HeaderInner from "./HeaderInner";

function Header() {
  return (
    <div className="bg-white dark:bg-gray-900 flex flex-col justify-center lg:flex-row items-center  lg:-mt-6 dark:border-gray-700">
      <div className="absolute inset-x-0 top-0 z-50">
        <Navbar />
        <HeaderInner />
      </div>
    </div>
  );
}

export default Header;
