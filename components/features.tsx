import React from "react";
import Image from "next/image";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import NeonUnderline from "./ui/NeonUnderline";
import Icons from "./global/icons";
import PrimaryButton from "./ui/button/PrimaryButton";
import { ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Icons.wallet className="h-6 w-6 lg:w-8 lg:h-8 text-green900" />,
      title: "Customize and design your cards to your style",
      description:
        "Create personalized cards that reflect your unique preferences and identity.",
      image: "/assets/feature-1.svg",
    },
    {
      id: 2,
      icon: <Icons.chart className="h-6 w-6 lg:w-8 lg:h-8 text-green900" />,

      title: "Personalize your financial insights and goals",
      description:
        "Gain tailored insights and set achievable goals to take control of your financial journey.",
      image: "/assets/feature-2.svg",
    },
    {
      id: 3,
      icon: <Icons.transfer className="h-6 w-6 lg:w-5 lg:h-5 text-green900" />,

      title: "Free transfers anywhere around the world",
      description:
        "Send money globally without fees, making your finances truly borderless.",
      image: "/assets/feature-3.svg",
    },
    {
      id: 4,
      icon: <Icons.piggybank className="h-6 w-6 lg:w-8 lg:h-8 text-green900" />,

      title: "Hold money in 30+ currencies",
      description:
        "Easily manage and store your money in multiple currencies for global convenience.",
      image: "/assets/feature-4.svg",
    },
    {
      id: 5,
      icon: <Icons.hand className="h-6 w-6 lg:w-8 lg:h-8 text-green900" />,

      title: "All your subscriptions in one place",
      description:
        "Track and manage all your subscriptions effortlessly from a single dashboard.",
      image: "/assets/feature-5.svg",
    },
  ];

  return (
    <Wrapper className="!bg-white flex flex-col items-center justify-center py-20 p">
      <Container>
        <div className="relative flex flex-col items-center justify-center w-11/12 md:w-full space-y-3 lg:space-y-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl md:!leading-snug font-semibold text-center bg-clip-text text-green900 max-w-xl 2xl:max-w-2xl relative">
            Experience the Future of Banking with Our{" "}
            <span className="relative">
              Features
              <NeonUnderline />
            </span>{" "}
          </h1>

          <div className="flex flex-col items-center lg:items-start space-y-7 lg:space-y-5 px-0 md:px-[10%]">
            <p className="text-base md:text-lg 2xl:text-xl text-center mt-2 text-green900">
              Manage money, reach goals. Simple tools, expert guidance.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col space-y-3 mt-10 lg:mt-20 px-0 lg:px-8">
          {/* Top two boxes */}
          <Container>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-3 space-y-3 lg:space-y-0">
              {features.slice(0, 2).map((feature) => (
                <div
                  key={feature.id}
                  className=" overflow-hidden relative bg-gray100 flex flex-col items-start text-left p-6 py-8 border rounded-[20px] shadow-sm col-span-1 w-full lg:w-1/2 space-y-4 h-[535px] md:h-[600px] lg:h-[700px]"
                >
                  <div className="p-4 lg:p-5 rounded-full flex items-center justify-center border-[0.5px] border-gray-300">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-green900 text-wrap w-11/12 md:w-full lg:w-2/3">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 text-wrap w-11/12 md:w-full lg:w-5/6">
                    {feature.description}
                  </p>

                  <div className="absolute -bottom-24 lg:-bottom-5 left-0 px-[5%] w-full">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={100}
                      height={100}
                      className="mx-auto w-full h-[450px] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Container>

          {/* Full-width box */}
          <Container>
            <div className="relative flex items-center justify-between text-left p-6 border rounded-[20px] shadow-sm md:col-span-2 lg:col-span-3 h-[250px] lg:h-[450px] bg-gray100 overflow-hidden">
              <div className="flex flex-col items-start justify-start space-y-3">
                <div className="p-4 lg:p-5 rounded-full flex items-center justify-center border-[0.5px] border-gray-300 mb-4 lg:mb-10">
                  {features[2].icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-green900 text-wrap w-11/12 md:w-full lg:w-1/2">
                  {features[2].title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 text-wrap w-11/12 md:w-full lg:w-2/3">
                  {features[2].description}
                </p>
              </div>

              <div className="absolute right-0 hidden lg:flex items-center justify-center w-[60%] h-auto lg:h-[450px]">
                <Image
                  src={features[2].image}
                  alt={features[2].title}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </Container>

          {/* Bottom three boxes */}
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {features.slice(3, 5).map((feature, index) => (
                <div
                  key={feature.id}
                  className="flex flex-col items-start text-left py-10 border rounded-[20px] bg-gray100 shadow-sm col-span-1 overflow-hidden"
                >
                  <div className="w-full flex flex-col px-5 space-y-3">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center border-[0.5px] border-gray-300 mb-2">
                      {feature.icon}
                    </div>

                    <h3 className="text-2xl font-semibold text-green900 text-wrap w-11/12 md:w-5/6 ">
                      {feature.title}
                    </h3>
                  </div>

                  <div className={`w-full h-48 flex `}>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={150}
                      className={`object-contain mt-7 ${
                        index === 0
                          ? "h-36 lg:h-48 -ml-2"
                          : "px-5 w-full h-full"
                      }`}
                    />
                  </div>
                </div>
              ))}

              <div
                key={"view-more"}
                className="relative flex flex-col items-start justify-center text-left px-6 py-8 border rounded-[20px] bg-green900 shadow-sm col-span-1 overflow-hidden"
              >
                <div className="absolute top-0">
                  <Image
                    src={"/assets/feature-6.svg"}
                    alt={"View more"}
                    width={400}
                    height={450}
                    className={`object-contain`}
                  />
                </div>
                <div className="w-full flex flex-col mb-8 mt-[30%]">
                  <h1 className="text-2xl md:text-2xl lg:text-3xl md:!leading-snug font-semibold text-left bg-clip-text text-white w-2/3 relative">
                    Check Out Our Other Product{" "}
                    <span className="relative">
                      Features
                      <NeonUnderline />
                    </span>{" "}
                  </h1>
                </div>

                <PrimaryButton
                  title="View More"
                  titleClassName="!text-black"
                  buttonClassName="!bg-green500"
                  icon={
                    <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 bg-black rounded-full">
                      <ArrowRight className="text-white w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  }
                />
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Features;
