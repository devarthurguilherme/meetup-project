//Chakra UI Elements
import { 
    Box,
    Flex,
    Image, 
    Container, 
    Heading 
} from '@chakra-ui/react';

//Images
import deviceLeft from "../../assets/device-left.webp";
import meetupLogo from "../../assets/meetup-logo.svg";
import deviceRight from "../../assets/device-right.webp";
import androidAppstore from "../../assets/android-app-download.svg";
import iosAppstore from "../../assets/ios-app-download.svg";

const Connected = () => {
  return (
    <Box my="20">
        <Container maxWidth="container.xl">
            <Flex
                pos="relative"
                justify-content="space-between"
                alignItems="center"
            >
                <Box
                    display={{
                        sm: "none",
                        md: "block",
                        lg: "block",
                        xl: "block",
                        base: "none"
                    }} 
                >
                    <Image w="260px" src={deviceLeft}/>
                </Box>
                <Box pos="relative" mx="auto" align="center">
                    <Image w="80px" left="0" src={meetupLogo}/>
                    <Heading as="h6" size="md" my="7">
                        Stay connected. <br /> Download the app.
                    </Heading>
                    <Flex justifyContent="center" alignItems="center">
                        <Image w="100px" p="5" src={androidAppstore}/>
                        <Image w="100px" p="5" src={iosAppstore}/>
                    </Flex>
                </Box>
                <Box
                    display={{
                        sm: "none",
                        md: "block",
                        lg: "block",
                        xl: "block",
                        base: "none"
                    }} 
                >
                    <Image w="260px" right="0" src={deviceRight}/>
                </Box>
            </Flex>
        </Container>
    </Box>
  )
}

export default Connected