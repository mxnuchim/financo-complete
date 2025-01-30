import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen px-8 md:px-24 2xl:px-32",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
