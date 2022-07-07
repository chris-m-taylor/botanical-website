import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from 'next/link'


const Nav = ({ socials }) => {

   return (
      <>
         <NextLink href="/">
            <Link color='green.200'><Text fontSize="2xl">Home</Text></Link>
         </NextLink>
         <NextLink href="/about" passHref={true}>
            <Link color='green.200'><Text fontSize="2xl">About</Text></Link>
         </NextLink>
         <NextLink href="/shows" passHref={true}>
            <Link color='green.200'><Text fontSize="2xl">Shows</Text></Link>
         </NextLink>
         <NextLink href="contact">
            <Link color='green.200'><Text fontSize="2xl">Contact Us</Text></Link>
         </NextLink>
      </>
   )
}

export default Nav;