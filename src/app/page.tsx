"use client";

import About from "@/components/About";
import ServiceCard from "@/components/common/ServiceCard";
import Contact from "@/components/Contact";
import FaqSection from "@/components/FAQ";
import HeroSection from "@/components/HeroSlider";
import HomePage from "@/components/last";
import Services from "@/components/Services";
import Start from "@/components/Start";
import Team from "@/components/Team";
import WhoWeAre from "./about/whoWeAre/page";
// import { ContactIcon } from "@/components/ContactIcon";

export default function Home() {
  return (
    <>
      <Start/>
      <WhoWeAre/>
      <Services limit={6}/>
      <Team limit={6}/>
      <Contact/>
    </>
   
  );
}
