import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from 'next/link'


const Nav = ({ socials }) => {

   return (
      <>
         <NextLink href="/" _hover="color:pink">
         <button className="SocialLinkButton">
            <Link color='#8fd7a7' _hover="text-decoration:none"><Text fontSize="2xl" fontFamily="Georgia">HOME</Text></Link>
         </button>
         </NextLink>
         <NextLink href="/about" passHref={true}>
         <button className="SocialLinkButton">
            <Link color='#8fd7a7' _hover="text-decoration:none"><Text fontSize="2xl" fontFamily="Georgia">ABOUT</Text></Link>
         </button>
         </NextLink>
         <button className="SocialLinkButton">
            <NextLink href="/shows" passHref={true}>
               <Link color='#8fd7a7' _hover="text-decoration:none"><Text fontSize="2xl" fontFamily="Georgia">SHOWS</Text></Link>
            </NextLink>
         </button>
         
      </>
   )
}

export default Nav;