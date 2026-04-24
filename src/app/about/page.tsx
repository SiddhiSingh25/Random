import About from '@/components/About'
import WhyChooseUs from '@/components/WhyChooseUs'
import TeamSection from './coreTeam/page'
import WhoWeAre from './whoWeAre/page'
import Header from '@/components/common/header'
import PageHeader from '@/components/common/header'

const page = () => {
  return (
    <>
    <PageHeader
  label="Our Story" 
  title="Driving Innovation Since 2004" 
  description="Learn about our journey, our values, and the people behind our success."
/>
    
     <WhoWeAre/>
    <WhyChooseUs/>
    </>
   
  )
}

export default page