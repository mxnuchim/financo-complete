"use client";
import React, { useState } from "react";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import NeonUnderline from "./ui/NeonUnderline";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { faqs } from "@/constants";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper className="!bg-gray100 flex flex-col items-center justify-center py-20 2xl:py-32">
      <Container>
        <div className="w-full flex flex-col items-center justify-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl md:!leading-snug font-semibold text-center lg:text-left bg-clip-text text-green900 max-w-xl relative">
            We're Here to{" "}
            <span className="relative">
              Help
              <NeonUnderline />
            </span>{" "}
          </h1>
          <p className="text-base md:text-lg text-center lg:text-left mt-2 text-green900">
            Need help? We’ve got you covered with answers.
          </p>
        </div>
        <div className="relative flex flex-col lg:flex-row items-center justify-between w-11/12 md:w-full space-y-10 lg:space-y-0">
          {/* Text Section */}
          <div className="flex flex-col w-full items-center lg:items-start lg:w-1/2 space-y-3 lg:space-y-5">
            {/* FAQ Section */}
            <div className="space-y-4 w-full transition-all ease-in-out duration-300">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 py-3 cursor-pointer "
                >
                  <div
                    className="flex items-center justify-between"
                    onClick={() => toggleDropdown(index)}
                  >
                    <h3 className="text-base lg:text-lg font-medium text-green900">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`text-green900 transition-transform h-5 w-5 lg:h-6 lg:w-7 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openIndex === index && (
                    <p className="mt-2 lg:mt-4 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <Image
              src="/assets/faq-image.svg"
              alt="FAQ Illustration"
              width={500}
              height={500}
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default FAQ;
