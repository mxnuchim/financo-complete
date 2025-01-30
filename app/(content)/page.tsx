"use client";
import Benefits from "@/components/benefits";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import React from "react";

const HomePage = () => {
  return (
    <section className="w-full relative flex items-center justify-center flex-col">
      <Hero />
      <Benefits />
      <Features />
      <Testimonial />
      <FAQ />
      <CTA />
    </section>
  );
};

export default HomePage;
