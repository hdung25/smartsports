import HomeHero from "@/components/HomeHero";
import HowItWorks from "@/components/HowItWorks";
import WhyItMatters from "@/components/WhyItMatters";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import SuccessLooksLike from "@/components/SuccessLooksLike";
import Testimonials from "@/components/Testimonials";
import BuildWhatsNext from "@/components/BuildWhatsNext";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <RevealOnScroll>
        <HowItWorks />
      </RevealOnScroll>
      <RevealOnScroll>
        <WhyItMatters />
      </RevealOnScroll>
      <RevealOnScroll>
        <WhatMakesDifferent />
      </RevealOnScroll>
      <RevealOnScroll>
        <SuccessLooksLike />
      </RevealOnScroll>
      <RevealOnScroll>
        <Testimonials />
      </RevealOnScroll>
      <RevealOnScroll>
        <BuildWhatsNext />
      </RevealOnScroll>
    </>
  );
}
