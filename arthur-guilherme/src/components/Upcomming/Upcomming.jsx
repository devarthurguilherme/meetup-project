//Chakra Ui
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link
} from "@chakra-ui/react";

//Data
import Events from "./Events";

const Upcomming = () => {
  return (
    <Box mt="20">
      <Container maxWidth="container.xl">
        <Box
          mb="7"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            {" "}
            <Heading alignItems="center" as="h3" size="lg">
              Upcoming online events
            </Heading>            
          </Box>
          <Box>
            {" "}
            <Link fontWeight="semibold" color="teal.500">
              Explore more Events
            </Link>            
          </Box>
        </Box>
        <Grid templateColumns={{
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(4, 1fr)",
                base: "repeat(1, 1fr)"
              }} 
              gap="6">
          {Events.map((eachEvent) => {
            return(
              <GridItem align="left">
                <Box position="relative">
                  <Image
                    position="relative"
                    w="100%"
                    src={eachEvent.image}
                    alt="brand"
                  />
                  <Box
                    position="absolute"
                    d="flex"
                    alignItems="center"
                    borderRadius="5px"
                    top="0"
                    background="#ffffff"
                    fontSize="sm"
                    m="2"
                    px="3"
                    py="1"
                  >
                    <svg
                      data-swarm-icon="true"
                      width="18"
                      height="18"
                      fill="#757575"
                      ml="4"
                      d="block"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z"></path>
                    </svg>
                    <Box ml="2" color="#757575" fontWeight="semibold">
                      Online Event
                    </Box>
                  </Box>
                </Box>
                <Box mt="3" color="#877457" fontWeight="semibold">
                  {eachEvent.dateEvent}
                </Box>
                <Heading
                  alignItems="center"
                  as="h6"
                  mt="1"
                  fontweights="black"
                  size="sm"
                >
                  Upcoming online events
                </Heading>
                <Box my="3" size="xs">
                  Remote-Working Group
                </Box>
                <Flex d="flex" alignItems="center" justifyContent="space-between">
                  <Flex d="flex" alignItems="center">
                    <Image
                      borderRadius="full"
                      border="1px"
                      borderColor="gray.200"
                      boxSize="35px"
                      mr="-8px"
                      src="https://bit.ly/sage-adebayo"
                      alt="Segun Adebayo"
                    />
                    <Image
                      borderRadius="full"
                      boxSize="35px"
                      border="1px"
                      borderColor="gray.200"
                      mr="-8px"
                      src="https://bit.ly/sage-adebayo"
                      alt="Segun Adebayo"
                    />
                    <Image
                      borderRadius="full"
                      boxSize="35px"
                      border="1px"
                      borderColor="gray.200"
                      mr="-8px"
                      src="https://bit.ly/sage-adebayo"
                      alt="Segun Adebayo"
                    />
                    <Box ml="16px" color="#757575">
                      134
                    </Box>
                  </Flex>
                  <Box>
                    <svg
                      data-swarm-icon="true"
                      height="18"
                      width="18"
                      viewBox="0 0 18 18"
                    >
                      <path d="M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z"></path>
                    </svg>
                  </Box>
                </Flex>
              </GridItem>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default Upcomming