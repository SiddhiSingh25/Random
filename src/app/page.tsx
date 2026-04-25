"use client";

import About from "@/components/About";
import ServiceCard from "@/components/common/ServiceCard";
import Contact from "@/components/Contact";
import FaqSection from "@/components/FAQ";
import Services from "@/components/Services";
import Start from "@/components/Start";
import Team from "@/components/Team";
import WhoWeAre from "./about/whoWeAre/page";
import AchievementSection from "./achievements/page";
import Testimonials from "./testimonials/page";
// import { ContactIcon } from "@/components/ContactIcon";

export default function Home() {
  return (
    <>
      <Start/>
      <WhoWeAre/>
      <Services />
      <Team limit={6}/>
      <Testimonials/>
      <AchievementSection/>
      <Contact/>
    </>
   
  );
}
