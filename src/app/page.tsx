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
import OurClients from "@/components/pages/ourClients";
import NewsLetter from "@/components/pages/newsLetter";
import UpdateBar from "@/components/pages/UpdateBar";
import GlobalAudit from "@/components/pages/globalAudits";
// import { ContactIcon } from "@/components/ContactIcon";

export default function Home() {
  return (
    <>
      <Start />
       <GlobalAudit/>
       <UpdateBar/>
      <WhoWeAre />
      
      {/* <AchievementSection /> */}
      <Services />
      {/* <Team limit={6} /> */}
      <Testimonials />
      <OurClients/>
      <NewsLetter/>
     
      <Contact />
    </>

  );
}
