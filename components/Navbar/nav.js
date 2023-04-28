import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from 'next/link'


const Nav = ({ socials }) => {

   return (
      <>
         <NextLink href="/">
         <button className="SocialLinkButton">
            <Link color='#8fd7a7'><Text fontSize="2xl">Home</Text></Link>
         </button>
         </NextLink>
         <NextLink href="/about" passHref={true}>
         <button className="SocialLinkButton">
            <Link color='#8fd7a7'><Text fontSize="2xl">About</Text></Link>
         </button>
         </NextLink>
         <NextLink href="/shows" passHref={true}>
         <button className="SocialLinkButton">
            <Link color='#8fd7a7'><Text fontSize="2xl">Shows</Text></Link>
         </button>
         </NextLink>
         <NextLink href="contact">
         <button className="SocialLinkButton">
            <Link color='#8fd7a7'><Text fontSize="2xl">Contact Us</Text></Link>
         </button>
         </NextLink>
      </>
   )
}

export default Nav;