import React from "react";
import Image from "next/image";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import PrimaryButton from "./ui/button/PrimaryButton";
import NeonUnderline from "./ui/NeonUnderline";
import Icons from "./global/icons";

const Hero = () => {
  return (
    <Wrapper className="!bg-gray100 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-20 2xl:pt-28 pb-6 h-full">
        <Container>
          {" "}
          <div className="relative flex flex-col lg:flex-row items-start justify-between w-11/12 md:w-full space-y-3 lg:space-y-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:!leading-snug font-semibold text-center lg:text-left bg-clip-text text-green900 max-w-full relative">
              Create{" "}
              <span className="relative">
                exceptional
                <NeonUnderline />
              </span>{" "}
              experiences with AI-Powered banking
            </h1>

            <div className="flex flex-col items-center lg:items-start space-y-7 lg:space-y-5 px-0 md:px-[10%]">
              <p className="text-base md:text- 2xl:text-2xl text-center lg:text-left mt-2 text-green900">
                Financo online banking allows you to easily manage your funds
                and perfectly control your cash flow.
              </p>
              <PrimaryButton
                title="Bank with Financo"
                titleClassName="text-sm lg:!text-base"
              />
            </div>
          </div>
        </Container>

        <Container>
          <div className="relative flex items-center justify-center py-10 md:py-20 2xl:py-32 w-full">
            {/* Central Image */}
            <div className="-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl relative z-10">
              <Image
                src="/assets/dashboard.svg"
                alt="banner image"
                width={1100}
                height={1100}
                quality={100}
                className="rounded-md lg:rounded-2xl"
              />
              {/* Bottom blur effect */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white to-gray100 blur-xl"></div>

              {/* SVG at the bottom left, inside the image */}
              <div className="absolute left-0 bottom-0 mb-1 -ml-[5%] w-[40%] h-auto">
                <Image
                  src="/assets/bottom-item.svg" // Replace with the actual path of your SVG
                  alt="SVG at bottom left"
                  width={400} // Half of the central image width
                  height={400} // Maintain proportional height
                  quality={100}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Left SVG */}
            <Image
              src="/assets/left-item.svg"
              alt="banner image"
              width={310}
              height={150}
              quality={100}
              className="absolute left-[5%] lg:left-[12%] 2xl:left-[20%] -translate-x-1/2 top-[35%] lg:top-[40%] -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
            />

            {/* Right SVG */}
            <Image
              src="/assets/right-item.svg"
              alt="banner image"
              width={310}
              height={150}
              quality={100}
              className="absolute right-[5%] lg:right-[12%] 2xl:right-[20%] translate-x-1/2 top-[30%] lg:top-[35%] -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
            />
          </div>
        </Container>
      </div>

      <Container className="pt-5 pb-16">
        <div className="flex justify-evenly space-x-4">
          <Icons.blendLogo className="w-16 lg:w-24 h-auto" />
          <Icons.cameoLogo className="w-16 lg:w-24 text-gray-300 h-auto" />
          <Icons.bitPandaLogo className="w-16 lg:w-24 text-gray-300 h-auto" />
          <Icons.bloomReachLogo className="w-16 lg:w-24 text-gray-300 h-auto" />
          <Icons.hippoLogo className="w-16 lg:w-24 text-gray-300 h-auto" />
          <Icons.cerebralLogo className="w-16 lg:w-24 text-gray-300 h-auto" />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
