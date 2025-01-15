"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AlertBanner() {
  // State to manage the visibility of the search bar
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Function to toggle search bar visibility
  const toggleSearchBar = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur">
      

      {/* Banner Title */}
      <div className="py-2 text-center sm:ml-[40px] text-xl font-serif font-bold">
        I am a FoodsBlogs
      </div>

{/* Link to Recipe Index */}
<div className="flex justify-between items-center gap-7  "> 
  <Link href="/reciepe" className=" font-semibold">Reciepes</Link>
<Link href="/contact" className=" font-semibold ">Contact</Link>
      {/* Search Section */}
      <div className="flex items-center">
        {/* Search Icon (Clickable) */}
        <Image
          src="/QuillSearch.png"
          alt="Search"
          width={40}
          height={40}
          className="cursor-pointer "
          onClick={toggleSearchBar} // Toggle search bar on click
        />

        {/* Search Input */}
        <input
          placeholder="Search Recipe"
          id="input"
          className={`bg-[#F0F0F0] sm:w-[200px] rounded-[1000px] h-[43px] px-3 focus:outline-none transition-all duration-300 ${
            isSearchVisible ? "block" : "hidden"
          }`}
        />
      </div>

      </div>
    </div>
  );
}
