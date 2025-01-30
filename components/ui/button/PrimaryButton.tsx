import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface PrimaryButtonProps {
  title?: string;
  buttonClassName?: string;
  titleClassName?: string;
  onClick?: () => void;
  icon?: React.ReactElement;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title = "Get started",
  titleClassName,
  buttonClassName,
  onClick,
  icon,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center justify-center w-max rounded-full bg-green900 backdrop-blur-lg px-2 lg:px-3 py-2 lg:py-3 gap-2 md:gap-4 shadow-3xl shadow-black/40 cursor-pointer select-none",
        buttonClassName
      )}
    >
      <p
        className={`text-white text-sm text-center font-medium pl-2 ${titleClassName}`}
      >
        {title}
      </p>
      <>
        {icon ? (
          icon
        ) : (
          <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 2xl:h-7 2xl:w-7 bg-white rounded-full">
            <ArrowRight className="text-black w-3 h-3 md:w-4 md:h-4 2xl:h-5 2xl:w-5" />
          </div>
        )}
      </>
    </div>
  );
};

export default PrimaryButton;
