import {Heading, Box} from "@chakra-ui/react"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import LatestNotice from "@/components/LatestNotice"
import MediaSection from "@/components/MediaSection"

export default async function Page() {
  return (
    <Box >
      <HeroSection />
      <ServicesSection />
      <LatestNotice />
      <MediaSection />
    </Box>
  )
}