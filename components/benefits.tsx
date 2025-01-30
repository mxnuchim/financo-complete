import React from "react";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import NeonUnderline from "./ui/NeonUnderline";
import PrimaryButton from "./ui/button/PrimaryButton";
import BenefitsGrid from "./ui/BenefitsGrid";

const Benefits = () => {
  return (
    <Wrapper className="!bg-white py-20 2xl:py-40 w-full flex items-center justify-center">
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-11/12 md:w-full space-y-3 lg:space-y-0">
        <Container>
          <div className="flex flex-col items-center lg:items-start space-y-5 lg:space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl md:!leading-snug font-semibold text-center lg:text-left bg-clip-text text-green900 max-w-full 2xl:max-w-xl relative">
              Beyond The Business{" "}
              <span className="relative">
                Banking
                <NeonUnderline />
              </span>{" "}
              Basics
            </h1>
            <p className="text-base md:text-lg 2xl:text-xl text-center lg:text-left mt-2 text-green900 max-w-full lg:max-w-md">
              Financo online banking allows you to easily manage your funds and
              perfectly control your cash flow.
            </p>
            <PrimaryButton titleClassName="text-sm lg:!text-base 2xl:!text-lg" />
          </div>
        </Container>

        <Container>
          <div className="!mt-12">
            <BenefitsGrid />
          </div>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Benefits;
