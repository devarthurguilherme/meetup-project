import {
    Box,
    Image,
    Container,
    Flex,
    Heading,
    Grid,
    GridItem,
    Link,
    Divider,
  } from '@chakra-ui/react';

import Groups from "./Groups.js";

const Popular = () => {
  return (
   <Box mt={20}>
   <Container maxWidth="container.xl">
     <Box
       mb="7"
       display="flex"
       alignItems="center"
       justifyContent="space-between"
     >
       <Box>
         <Heading fontWeight="black" alignItems="center" as="h3" size="lg">
           Popular groups
         </Heading>
       </Box>
       <Box>
         <Link fontWeight="semibold" color="teal.500">
           Explore more groups
         </Link>
       </Box>
     </Box>
     <Grid templateColumns="repeat(3, 1fr)" gap={6}>
       {Groups.map((group) => {
         return(
            <GridItem
               id={group.id}
               border="1px"
               borderColor="gray.200"
               p="15px"
               width="100%"
               align="left"
            >
               <Flex alignItems="center">
                  <Image
                     position="relative"
                     w="50px"
                     src={group.image}
                     alt="brand"
                     mr="15px"
                  />
                  <Heading
                     alignItems="center"
                     as="h6"
                     fontweights="black"
                     size="md"
                  >
                     {group.title}
                  </Heading>
               </Flex>
               <Divider my="3" mb="2" />
               <Box
                  py="2"
                  color="#877457"
                  textTransform="uppercase"
                  fontWeight="bold"
               >
                  {group.date}
               </Box>
               <Box fontWeight="bold" color="#212121">
                  {group.description}
               </Box>
            </GridItem>
         )
      })}
     </Grid>
   </Container>
 </Box>
  )
}

export default Popular