"use client";

import Contact from "@/components/Contact";
import Start from "@/components/Start";
import WhoWeAre from "./about/whoWeAre/page";
import OurClients from "@/components/pages/ourClients";
import NewsLetter from "@/components/pages/newsLetter";
import UpdateBar from "@/components/pages/UpdateBar";
import GlobalAudit from "@/components/pages/globalAudits";
import Testimonials from "@/components/pages/testimonials";
import Services from "./services/page";

export default function Home() {
  return (
    <>
      <Start />
       <GlobalAudit/>
       <UpdateBar/>
      <WhoWeAre />
      
      <Services limit={6}/>
      <Testimonials/>
      <OurClients/>
      <NewsLetter/>
     
      <Contact />
    </>

  );
}
