import About from '@/components/About'
import WhyChooseUs from '@/components/WhyChooseUs'
import TeamSection from './coreTeam/page'
import WhoWeAre from './whoWeAre/page'
import Header from '@/components/common/header'

const page = () => {
  return (
    <>
    <Header label="About"/>
    
     <WhoWeAre/>
    <WhyChooseUs/>
    </>
   
  )
}

export default page