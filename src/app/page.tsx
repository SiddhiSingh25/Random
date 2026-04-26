"use client";

import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Start from "@/components/Start";
import WhoWeAre from "./about/whoWeAre/page";
import Testimonials from "./testimonials/page";
import OurClients from "@/components/pages/ourClients";
import NewsLetter from "@/components/pages/newsLetter";
import UpdateBar from "@/components/pages/UpdateBar";
import GlobalAudit from "@/components/pages/globalAudits";

export default function Home() {
  return (
    <>
      <Start />
       <GlobalAudit/>
       <UpdateBar/>
      <WhoWeAre />
      
      <Services limit={6} />
      <Testimonials />
      <OurClients/>
      <NewsLetter/>
     
      <Contact />
    </>

  );
}
