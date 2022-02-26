import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Container, Flex, Icon, Link, Show } from "@chakra-ui/react"
import NextLink from "next/link"


const Navbar = () => {
   return (
      <Box  backgroundColor='green.50'>

         <Show breakpoint='(min-width: 500px)'>
            <Center>
               <NextLink href="google.com">
                  <Link color='green.500' p={5} size='md'>Home</Link>
               </NextLink>
               <NextLink href="google.com">
                  <Link color='green.500' p={5}>Music</Link>
               </NextLink>
               <NextLink href="google.com">
                  <Link color='green.500' p={5}>Contact Us</Link>
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