//Chakra UI Elements
import { 
    Box,
    Button,
    Container,
    Grid,
    GridItem,
    Heading,
    Image,
    Link,
    Text
} from '@chakra-ui/react'
import Data from "./Data"

const ItWorks = () => {
    

  return (
    <Box>
        <Container maxWidth="container.xl" marginY="20">
            <Heading align="center" as="h3" size="lg" pb="2">How Meetup works</Heading>
            <Box align="center" maxWidth="700px" mx="auto" pb="10">
                <Text>
                    Meet new people who share your interests through online and in-person
                    events. It’s free to create an account.
                </Text>
            </Box>
            <Grid templateColumns="repeat(3, 1fr)" gap="6">
                {
                    Data.map((gridItem) => {
                       return(
                        <GridItem key={gridItem.id} textAlign="center">
                            <Image width="100%" boxSize="160px" src={gridItem.imageSrc} alt={gridItem.alt} mx="auto"/>
                            <Heading as="h5" size="md">
                                <Link>
                                    <Box color="blue.100">
                                        {gridItem.heading}
                                    </Box>
                                </Link>
                            </Heading>
                            <Text>
                                {gridItem.description}
                            </Text>
                        </GridItem>
                       )
                    })
                }
            </Grid>
            <Box align="center" mt="16">
          <Button
            _hover={{ opacity: '0.8' }}
            bg="blue.100"
            color="#ffffff"
            fontWeight="normal"
            size="md"
          >
            Join Meetup
          </Button>
        </Box>
        </Container>
    </Box>
  )
}

export default ItWorks