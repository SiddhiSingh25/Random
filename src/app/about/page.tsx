import WhyChooseUs from '@/components/WhyChooseUs'
import WhoWeAre from './whoWeAre/page'
import Heading from '@/components/common/Heading'

const page = () => {
  return (
    <>

      <Heading
        label="Our Story"
        title="Driving Innovation Since 2004"
        description="Learn about our journey, our values, and the people behind our success."
      />
      <WhoWeAre />
      <WhyChooseUs />
    </>

  )
}

export default page