//Chakra UI Elements
import { Box, Image } from "@chakra-ui/react"

//Components
import Banner from "./components/Banner/Banner";
import ItWorks from "./components/HowMeetupWorks/ItWorks";
import UpComming from "./components/Upcomming/Upcomming";
import Popular from "./components/Popular/Popular";
import Connected from "./components/Connected/Connected";
import Stories from "./components/StoriesSection/Stories";
import Footer from "./components/Footer/Footerbottom";

//Image
import imageBg from './assets/bg.svg';

function App() {
  return (
    <>
     <Box position="absolute" left="0" right="0" top="0">
        <Banner />
        <ItWorks />
        <UpComming />
        <Popular />
        <Connected />
        <Stories />
        <Footer />
     </Box>
     <Box
        position="relative"
        top="0"
        bottom="0"
        right="0"
        left="0"
        height="100vh"
        zIndex={-1}
      >
        <Image w="80%" m="auto" objectFit="cover" sizes="300" src={imageBg} />
      </Box>
    </>
  )
}

export default App
