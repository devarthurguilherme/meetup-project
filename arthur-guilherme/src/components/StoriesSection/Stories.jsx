//Chakra UI Elements
import { 
    Box, Image, 
    Container,
    Flex,
    Grid,
    GridItem,
    Heading, 
    Link 
} from '@chakra-ui/react';

//Data
import StoriesData from './StoriesData';

const Stories = () => {
  return (
    <Box mt={10}>
      <Container maxWidth="container.xl">
        <Box
          mb="7"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box align="center" w="100%">
            <Heading alignItems="center" as="h3" size="lg" pb="2">
              Stories from Meetups
            </Heading>
            <Box maxW="700px">
              People on Meetup have fostered community, learned new skills,
              started businesses, and made life-long friends. Learn how.
            </Box>
          </Box>
        </Box>
        <Grid mt="10" mb="40" templateColumns={{
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(4, 1fr)",
                base: "repeat(1, 1fr)"
              }} gap={6}>
            {
                StoriesData.map((story) =>{
                    return(
                        <GridItem key={story.id}>
                            <Link>
                            <Image
                                src={story.image}
                                _hover={{ opacity: '0.8' }}
                                alt="brand"
                                mr="15px"
                                width="100%"
                            />
                            <Flex flexDirection="column">
                                <Heading
                                    alignItems="center"
                                    as="h6"
                                    fontweights="black"
                                    size="md"
                                    pt="4"
                                    pb="4"
                                    >
                                    {story.title}
                                </Heading>
                            </Flex>
                            </Link>
                            <Box>
                                {story.description}
                            </Box>
                        </GridItem>
                    )
                })
            }
        </Grid>
      </Container>
    </Box>
  )
}

export default Stories