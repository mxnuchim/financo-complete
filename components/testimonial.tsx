import React from "react";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import TestimonialLogo from "./ui/TestimonialLogo";
import Image from "next/image";

const Testimonial = () => {
  return (
    <Wrapper className="!bg-gray100 py-20 2xl:py-32 w-full hidden lg:flex items-center justify-center">
      <Container>
        <div className="w-full flex items-center justify-center h-72 space-x-4 px-0 lg:px-16">
          <div className="bg-gray200 w-80 h-full rounded-[18px] flex items-center justify-center">
            <TestimonialLogo />
          </div>
          <div className="h-full flex flex-col flex-grow max-w-screen-md items-center justify-center bg-green900 rounded-[18px] px-10">
            <span className="text-2xl font-semibold italic text-white text-left">
              "{testimonial.body}"
            </span>

            <div className="w-full flex items-center justify-start mt-[10%] space-x-3">
              <Image
                src={testimonial.author.avatar}
                alt={testimonial.author.name}
                width={50}
                height={50}
                className="w-10 h-10 bg-green900 border-[0.5px] border-gray-500 rounded-md"
              />

              <div className="flex flex-col items-start justify-start">
                <p className="text-white font-medium text-base lg:text-lg">
                  {testimonial.author.name}
                </p>
                <p className="text-gray-500 font-normal text-sm lg:text-base">
                  {testimonial.author.position} | {testimonial.author.company}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Testimonial;

const testimonial = {
  body: "Investing used to scare me. Now, I feel confident with Financo's guidance and saved thousands thanks to their budgeting tools. Feeling more secure.",
  author: {
    name: "Geoffroy Uyttenhove",
    position: "Co-founder",
    company: "Syndic4you",
    avatar: "/assets/author.png",
  },
};
