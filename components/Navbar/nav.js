import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from 'next/link'


const Nav = ({ instagram }) => {

   return (
      <>

         <NextLink href="/">
            <Link color='green.200' px={3}><Text fontSize="2xl">Home</Text></Link>
         </NextLink>
         <NextLink href="/about" passHref={true}>
            <Link color='green.200' px={3}><Text fontSize="2xl">About</Text></Link>
         </NextLink>
         <NextLink href="contact">
            <Link color='green.200' px={3}><Text fontSize="2xl">Contact Us</Text></Link>
         </NextLink>

         {
            instagram &&
            <NextLink href="https://www.instagram.com/botanicalselectionsband/" passHref={true}>
               <Link target='_blank' color='pink.200' px={3}>
                  <Text fontSize="2xl">Instagram</Text>
               </Link>
            </NextLink>
         }
      </>
   )
}

export default Nav;