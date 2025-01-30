"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link for navigation
import Icons from "../global/icons";
import { ChevronDown, Menu, X } from "lucide-react"; // Import the hamburger menu icon
import PrimaryButton from "../ui/button/PrimaryButton";

const Navbar = () => {
  // Define an array of links
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#", hasArrow: true },
    { label: "Pricing", href: "#" },
    { label: "Blog", href: "#" },
  ];

  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full bg-white h-20 lg:h-24 flex items-center justify-between px-4 md:px-20">
      {/* Logo Section */}
      <div className="flex items-center justify-center space-x-24">
        <Icons.logo className="w-24 h-10 md:w-28 lg:w-32 lg:h-10" />
        {/* Navbar Links for Desktop */}
        <div className="hidden lg:flex h-full items-center space-x-10 mt-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="transition-all ease-in-out duration-300 flex items-center"
            >
              <span className="text-sm font-medium text-gray-700 hover:text-black">
                {link.label}
              </span>
              {link.hasArrow ? (
                <ChevronDown size={14} className="ml-1" />
              ) : null}
            </Link>
          ))}
        </div>
      </div>

      {/* Sign In Section for Desktop */}
      <div className="hidden lg:flex">
        <div className="flex items-center space-x-5">
          <PrimaryButton
            title="Sign in"
            buttonClassName="bg-white border border-gray-200"
            titleClassName="!text-black"
            icon={<Icons.person className="w-5 h-5 text-black" />}
          />
          <PrimaryButton title="Get a Demo" />
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden flex items-center">
        <Menu size={22} className="cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen ? (
        <div
          className={`lg:hidden fixed inset-0 bg-white z-[999] w-1/2 transform translate-x-full right-0 transition-transform duration-300 ease-in-out`}
        >
          <div className="w-full flex justify-end pt-10 pr-10">
            <X size={20} className="cursor-pointer" onClick={toggleMenu} />
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 pt-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-black"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.label}
                {link.hasArrow ? (
                  <ChevronDown size={14} className="ml-1 inline" />
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
