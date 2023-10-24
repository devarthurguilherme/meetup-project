//Chakra UI Elements
import { 
    Badge, 
    Box, 
    Button, 
    Container, 
    Flex, 
    FormControl, 
    Grid, 
    GridItem, 
    Heading, 
    Image, 
    Input,
    Text
} from '@chakra-ui/react';
//Icons
import { AiOutlineArrowRight } from "react-icons/ai";

//Images
import brandLogo from "../../assets/brand-logo.svg";
import Illustration from "../../assets/illustration.svg";
import ImageOne from "../../assets/image-one.jpg";
import ImageTwo from "../../assets/image-two.jpg";
import ImageThree from "../../assets/image-three.jpg";

//Data
import BadgeText from './BadgetText';
//50:35

const Banner = () => {
  return (
    <>
        <header>
            <Flex
                d="flex"
                alignItems="center"
                justifyContent="space-between"
                ml={6}
                mr={6}
            >
                <Box>
                    <Image 
                        boxSize="90px"
                        src={brandLogo}
                        alt="brand"
                    />
                </Box>
                <Box>
                    <Button 
                        pr={3} 
                        colorScheme='gray.600' 
                        fontSize="sm" 
                        variant='link'
                    >
                        Login
                    </Button>
                    <Button 
                        pr={3} 
                        colorScheme='gray.600' 
                        fontSize="sm" 
                        variant='link'
                    >
                        Sign Up
                    </Button>
                </Box>
            </Flex>
        </header>
        <Box>
            <Container maxWidth="container.xl">
                <Flex 
                    alignItems="center" 
                    py="20"
                    flexDirection={{
                        sm: "column",
                        md: "row",
                        base: "column"
                    }}
                >
                    <Box>
                        <Heading>
                            <Box>Dive in! There are so many things to do in Meeutup</Box>
                        </Heading>
                        <Box mt="6" fontWeight="medium">
                            Join a group to meet people, make friends, find support, grow a 
                            business, and explore your interest. Thousand of events are 
                            happening every day, both online and in person!
                        </Box>
                    </Box>
                    <Box w="100%">
                        <Image w="100%" src={Illustration} alt="illustration"/>
                    </Box>
                </Flex>
            </Container>
        </Box>
        <Container maxW="container.xl" mt={10}>
            <Grid 
                templateColumns={{
                    sm: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(3, 1fr)",
                    base: "repeat(1, 1fr)"
                }} 
                gap="4">
                <GridItem>
                    Make new friend
                    <Image w="100%" borderRadius="lg" src={ImageOne} alt="image-three"/>
                    <Button rightIcon={<AiOutlineArrowRight />} colorSheme="teal" variant="link" mt="5">
                        Explore the outdoors   
                    </Button>
                </GridItem>
                <GridItem>
                    Make new friend
                    <Image w="100%" borderRadius="lg" src={ImageTwo} alt="image-three"/>
                    <Button rightIcon={ <AiOutlineArrowRight/>} colorSheme="teal" variant="link" mt="5">
                        Explore the outdoors                       
                    </Button>
                </GridItem>
                <GridItem>
                    Make new friend
                    <Image w="100%" borderRadius="lg" src={ImageThree} alt="image-three"/>
                    <Button rightIcon={<AiOutlineArrowRight />} colorSheme="teal" variant="link" mt="5">
                        Explore the outdoors
                    </Button>
                </GridItem>
            </Grid>
        </Container>
        <Container maxW="container.xl" mt={10}>
            <Flex display="flex" flexWrap="wrap" justifyContent="space-between" my={"10"}>
                {BadgeText.map((text) => {
                    return (
                            <Badge
                                key={text.id}
                                borderRadius="3xl"
                                px={4}
                                py={2}
                                mr="4"
                                mb="4"
                                color="#ffffff"
                                textTransform="normal"
                                bg="blue.100"
                            >
                                {text.title}
                            </Badge>
                            )
                })}
            </Flex>
        </Container>
        <Container maxW="container.xl" mt={10}>
            <Grid 
                templateColumns={{
                    sm: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    base: "repeat(1, 1fr)"
                }} 
                gap={6}>
                <GridItem>
                    <Heading as="h3" size="lg" mb="7">What do you want to do?</Heading>
                    <Flex
                        flexDirection={{
                            sm: "column",
                            md: "row",
                            base: "column"
                        }} 
                        alignContent="center" w="100%">
                        <Box flexBasis={{
                            sm: "100%",
                            md: "50%",
                            lg: "50%",
                            xl: "50%",
                            base: "100%"
                        }} 
                        w="100%" 
                        mr={{
                            sm: "0",
                            md: "2",
                            lg: "2",
                            xl: "2",
                            base: "0"
                        }}>
                            <FormControl>
                                <Box pos="relative">
                                    <Input 
                                        placeholder="Search for 'tennis'"
                                        type="text"
                                        w="100%"
                                        paddingLeft="8"
                                    >
                                    </Input>
                                    <Box 
                                        pos="absolute"
                                        top="3"
                                        left="2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 20 20"
                                            fill="#d9d9d9"
                                            >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Box>
                                </Box>
                            </FormControl>
                        </Box>
                        <Box flexBasis={{
                            sm: "100%",
                            md: "50%",
                            lg: "50%",
                            xl: "50%",
                            base: "100%"
                        }} w="100%">
                            <FormControl>
                                <Box pos="relative">
                                    <Input 
                                        placeholder="Search for 'tennis'"
                                        type="text"
                                        w="100%"
                                        paddingLeft="8"
                                    >
                                    </Input>
                                    <Box 
                                        pos="absolute"
                                        top="3"
                                        left="2"
                                    >
                                         <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 20 20"
                                            fill="#d9d9d9"
                                            >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"
                                            />
                                            </svg>
                                    </Box>
                                </Box>
                            </FormControl>
                        </Box>
                    </Flex>
                    <Button
                        _hover={{ opacity: "0.8" }}
                        mt="5"
                        pt="6"
                        pb="6"
                        w="100%"
                        color="#ffffff"
                        bg="red.200"
                        fontSize="lg"
                    >
                        <Box fontWeight="black">Search</Box>
                    </Button>
                </GridItem>
                <GridItem>
                    <Heading as="h3" size="lg" mb="7">See what's happening</Heading>
                    <Flex display="flex" flexWrap="wrap" justifyContent="space-between" my={"10"}>
                        {BadgeText.map((text) => {
                            return (
                                <Badge
                                    key={text.id}
                                    borderRadius="3xl"
                                    px={4}
                                    py={2}
                                    mr="4"
                                    mb="4"
                                    color="#ffffff"
                                    textTransform="normal"
                                    bg="blue.100"
                                >
                                    {text.title}
                                </Badge>
                            )
                        })}
                    </Flex>
                </GridItem>
            </Grid>
        </Container>
    </>
  );
}

export default Banner