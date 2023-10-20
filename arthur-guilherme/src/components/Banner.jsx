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
    Input 
} from '@chakra-ui/react';
//Images
import brandLogo from "../assets/brand-logo.svg";
import Illustration from "../assets/illustration.svg";
import ImageOne from "../assets/image-one.jpg";
import ImageTwo from "../assets/image-two.jpg";
import ImageThree from "../assets/image-three.jpg";
import RightArrow from "../assets/right-arrow.svg";


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
                <Flex d="flex" alignItems="center" py="20">
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
            <Grid templateColumns="repeat(3, 1fr)">
                <GridItem>
                    Make new friend
                    <Image w="100%" borderRadius="lg" src={ImageOne} alt="image-three"/>
                    <Button colorSheme="teal" variant="link" mt="5">
                        Explore the outdoors
                        <Image w="100%" ml="2" src={RightArrow} alt="right arrow"/>
                    </Button>
                </GridItem>
                <GridItem>
                    Make new friend
                    <Image w="100%" borderRadius="lg" src={ImageTwo} alt="image-three"/>
                    <Button colorSheme="teal" variant="link" mt="5">
                        Explore the outdoors
                        <Image w="100%" ml="2" src={RightArrow} alt="right arrow"/>
                    </Button>
                </GridItem>
                <GridItem>
                    Make new friend
                    <Image w="100%" borderRadius="lg" src={ImageThree} alt="image-three"/>
                    <Button colorSheme="teal" variant="link" mt="5">
                        Explore the outdoors
                        <Image w="100%" ml="2" src={RightArrow} alt="right arrow"/>
                    </Button>
                </GridItem>
            </Grid>
        </Container>
        <Container maxW="container.xl" mt={10}>
            <Flex display="flex" flexWrap="wrap" justifyContent="space-between" my={"10"}>
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform="normal"
                    color="#ffffff"
                    bg="blue.100"
                >
                    Boost your carrer
                </Badge>
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    color="#ffffff"
                    textTransform="normal"
                    bg="blue.100"
                >
                    Find your zen
                </Badge>
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    color="#ffffff"
                    textTransform="normal"
                    bg="blue.100"
                >
                    Get moving
                </Badge>
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    color="#ffffff"
                    textTransform="normal"
                    bg="blue.100"
                >
                    Share launguage + culture
                </Badge>
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    color="#ffffff"
                    textTransform="normal"
                    bg="blue.100"
                >
                    Read with friends
                </Badge>
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    color="#ffffff"
                    textTransform="normal"
                    bg="blue.100"
                >
                    Write together
                </Badge>
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    color="#ffffff"
                    textTransform="normal"
                    bg="blue.100"
                >
                    Hone your craft
                </Badge>
            </Flex>
        </Container>
        <Container maxW="container.xl" mt={10}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Box>
                    <Heading as="h3" size="lg" mb="7"></Heading>
                    <Flex alignContent="center" w="100%">
                        <Box flexBasis="50%" w="100%" mr="2">
                            <FormControl>
                                <Box pos="relative">
                                    <Input 
                                        placeholder="Search for 'tennis'"
                                        type="text"
                                        w="100%"
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
                                        {/* 23:42  https://www.youtube.com/watch?v=s-bIsz-NR3c&t=758s  https://docs.google.com/document/d/1AedsKocvNzFlmx4hZtDS6-NKkQf8YEFNopNkv2vuHE8/edit*/}
                                    </Box>
                                </Box>
                            </FormControl>
                        </Box>
                    </Flex>
                </Box>
                <GridItem>

                </GridItem>
            </Grid>
        </Container>
    </>
  )
}

export default Banner