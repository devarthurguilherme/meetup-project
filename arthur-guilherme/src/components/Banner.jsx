import { Box, Button, Flex, Image } from '@chakra-ui/react';
import brandLogo from "../assets/brand-logo.svg"

const Banner = () => {
  return (
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
  )
}

export default Banner