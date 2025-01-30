import React from "react";
import Icons from "../global/icons";

interface Feature {
  icon: React.ReactNode;
  text: string;
}

const features: Feature[] = [
  {
    icon: <Icons.hand className="h-6 w-6 lg:w-7 lg:h-7 text-green900" />,
    text: "No Hidden Fees, Just Transparent Banking",
  },
  {
    icon: <Icons.bot className="h-6 w-6 lg:w-7 lg:h-7 text-green900" />,
    text: "AI-Powered Insights for Smarter Investments",
  },
  {
    icon: <Icons.bitcoin className="h-6 w-6 lg:w-7 lg:h-7 text-green900" />,
    text: "Easily Trade and Manage Cryptocurrencies",
  },

  {
    icon: <Icons.wallet className="h-6 w-6 lg:w-7 lg:h-7 text-green900" />,
    text: "Instant, Real-Time Transaction Monitoring",
  },
];

const BenefitsGrid: React.FC = () => {
  return (
    <div className="relative grid grid-cols-2 gap-2 w-full max-w-[490px] 2xl:max-w-[590px] md:w-[490px] 2xl:w-full md:h-[490px] h-[425px] lg:h-[490px] 2xl:h-[590px] mx-auto p-2.5 border border-gray-300 rounded-[26px] ">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-[21px] bg-gray100 px-2.5"
        >
          <div className="bg-white rounded-xl flex items-center justify-center p-3 lg:p-4 shadow-sm">
            {feature.icon}
          </div>
          <p className="mt-2 text-xs md:text-sm 2xl:text-base font-medium text-green900 text-center text-wrap">
            {feature.text}
          </p>
        </div>
      ))}
      {/* Center Circle */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-28 h-28 md:w-40 md:h-40 bg-white rounded-full shadow-lg flex items-center justify-center p-0.5">
          <div className="w-full h-full flex items-center justify-center rounded-full bg-gray100">
            <Icons.icon className="w-8 h-8 md:w-14 md:h-14" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsGrid;
