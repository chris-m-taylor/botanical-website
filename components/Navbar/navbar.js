import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Container, Flex, Icon, Link, Show, Text } from "@chakra-ui/react"
import NextLink from "next/link"


const Navbar = () => {
   return (
      <Box  backgroundColor='black'>

         <Show breakpoint='(min-width: 500px)'>
            <Center>
               <NextLink href="google.com">
                  <Link color='green.200' px={5}><Text fontSize="4xl">Home</Text></Link>
               </NextLink>
               <NextLink href="google.com">
                  <Link color='green.200' px={5}><Text fontSize="4xl">Music</Text></Link>
               </NextLink>
               <NextLink href="google.com">
                  <Link color='green.200' px={5}><Text fontSize="4xl">Contact Us</Text></Link>
               </NextLink>
            </Center>
         </Show>

         <Show breakpoint="(max-width: 499px)">
            <Button size='lg' backgroundColor='green.500' m={5}>
               <HamburgerIcon color='green.50'/>
            </Button>
         </Show>

      </Box>

   )
}

export default Navbar;