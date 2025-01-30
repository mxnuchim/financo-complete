import React from "react";
import Wrapper from "./global/wrapper";
import NeonUnderline from "./ui/NeonUnderline";
import Container from "./global/container";
import PrimaryButton from "./ui/button/PrimaryButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CTA = () => {
  return (
    <Wrapper className="!bg-green900 flex flex-col items-center justify-center py-24 2xl:py-40">
      <Container>
        <div className="w-full flex flex-col items-center justify-center mb-16 px-0 lg:px-[25%] space-y-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl md:!leading-snug font-semibold text-center bg-clip-text text-white max-w-xl relative">
            Get the Financo{" "}
            <span className="relative">
              web app
              <NeonUnderline />
            </span>{" "}
          </h1>
          <p className="text-base md:text-lg text-center text-white">
            Financo online banking allows you to easily manage your funds and
            perfectly control your cash flow.
          </p>

          <PrimaryButton
            title="Download the app"
            titleClassName="!text-black"
            buttonClassName="!bg-green500"
            icon={
              <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 bg-black rounded-full">
                <ArrowRight className="text-white w-3 h-3 md:w-4 md:h-4" />
              </div>
            }
          />
        </div>

        <div className="relative flex items-center justify-center py-10 md:py-0 w-full">
          <div className="relative bg-green500 bg-opacity-10 -m-2 rounded-2xl lg:rounded-[21px] p-1.5 lg:p-3 overflow-hidden">
            <Image
              src="/assets/dashboard.svg"
              alt="banner image"
              width={1100}
              height={1100}
              quality={100}
              className="rounded-2xl lg:rounded-[21px] ring-1 ring-gray-500"
            />
            {/* Gradient Blur Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent via-green900/75 to-green900 pointer-events-none" />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default CTA;
