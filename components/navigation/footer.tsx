"use client";
import Link from "next/link";
import React from "react";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";

const Footer = () => {
  const footerLinks = [
    {
      title: "Support",
      links: ["Help", "FAQ", "Contact"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Developer"],
    },
  ];

  return (
    <Wrapper className="bg-green900 text-white py-16 2xl:py-28">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 px-6 lg:px-0">
        {/* App Info and Logo */}
        <div className="flex flex-col items-start space-y-4">
          <Icons.logo_light className="w-24 h-10 md:w-28 lg:w-32 lg:h-10" />
          {/* Replace with your actual logo component */}
          <p className="text-sm text-gray-300 max-w-sm">
            Financo is an AI-powered fintech app that helps you manage your
            finances with ease and confidence.
          </p>
        </div>

        {/* Support Links */}
        <div className="ml-0 lg:ml-16 lg:border-r-[0.5px] border-white/10">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            {footerLinks[0].links.map((link, index) => (
              <li key={index}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="hover:underline"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className="lg:border-r-[0.5px] border-white/10">
          <h3 className="text-lg font-semibold mb-4 ">Company</h3>
          <ul className="space-y-2">
            {footerLinks[1].links.map((link, index) => (
              <li key={index}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="hover:underline"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Social Media and Newsletter */}
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <Icons.facebook className="w-6 h-6 cursor-pointer" />
            <Icons.twitter className="w-6 h-6 cursor-pointer" />
            <Icons.linkedin className="w-6 h-6 cursor-pointer" />
            <Icons.instagram className="w-6 h-6 cursor-pointer" />
          </div>
          <p className="text-lg font-semibold">Subscribe to newsletter</p>
          <span className="text-sm text-gray-300">
            Curious about new developments? Subscribe to our daily newsletter
            now!
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
