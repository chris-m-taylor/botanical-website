import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Container, Flex, Grid, Icon, Link, Show, Spacer, Text } from "@chakra-ui/react"
import NextLink from "next/link"


const Navbar = () => {
   return (
      <Box  backgroundColor='black'>

         <Show breakpoint='(min-width: 1059px)'>
            <Grid templateColumns='1fr 1fr 1fr'>

               <Flex margin={5}>
                  <NextLink href="/">
                     <Link color='green.200' px={3}><Text fontSize="2xl">Home</Text></Link>
                  </NextLink>
                  <NextLink href="https://www.instagram.com/botanicalselectionsband/" passHref={true}>
                     <Link target='_blank' color='green.200' px={3}><Text fontSize="2xl">Music</Text></Link>
                  </NextLink>
                  <NextLink href="contact">
                     <Link color='green.200' px={3}><Text fontSize="2xl">Contact Us</Text></Link>
                  </NextLink>
               </Flex>
               
               <Box textAlign='center' m='auto' fontSize='2xl'>
                  <NextLink href="/">BOTANICAL SELECTIONS</NextLink>
               </Box>

               <NextLink href="https://www.instagram.com/botanicalselectionsband/" passHref={true}>
                     <Link target='_blank' color='pink.200' px={3} textAlign='center' m='auto'>
                        <Text fontSize="2xl">Instagram</Text>
                     </Link>
               </NextLink>
            </Grid>
         </Show>

         <Show breakpoint="(max-width: 1058px)">
            <Grid templateColumns='1fr 1fr'>
               <Box textAlign='center' m='auto' ml='2' fontSize='2xl'>
                  <NextLink href="/">BOTANICAL SELECTIONS</NextLink>
               </Box>

               <Box textAlign='right'>
                  <Button backgroundColor='green.500' m={5} width={19}>
                     <HamburgerIcon color='green.50'/>
                  </Button>
               </Box>
               
            </Grid>
            
         </Show>

      </Box>

   )
}

export default Navbar;