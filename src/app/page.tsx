import HomeHero from "@/components/HomeHero";
import HowItWorks from "@/components/HowItWorks";
import WhyItMatters from "@/components/WhyItMatters";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import SuccessLooksLike from "@/components/SuccessLooksLike";
import Testimonials from "@/components/Testimonials";
import BuildWhatsNext from "@/components/BuildWhatsNext";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HowItWorks />
      <WhyItMatters />
      <WhatMakesDifferent />
      <SuccessLooksLike />
      <Testimonials />
      <BuildWhatsNext />
    </>
  );
}
