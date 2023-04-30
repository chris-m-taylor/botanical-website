import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

const Socials = () => {
  return(
    <Flex textAlign='center' justifyContent='space-evenly' >
      <NextLink href="https://www.instagram.com/botanicalselectionsband/" passHref={true} padding={0} margin={0}>
      <button className="SocialLinkButton">
        <Link target='_blank' color='#ffa1f2' _hover="text-decoration:none">
           <Text fontSize="2xl" fontFamily="Georgia">Instagram</Text>
        </Link>
      </button>
      </NextLink>
      <NextLink href="https://www.youtube.com/channel/UCgqHx-y3cT0fvM0Yo_YBjLA" passHref={true} padding={0} margin={0}>
      <button className="SocialLinkButton">
        <Link target='_blank' color='#ffa1f2' _hover="text-decoration:none">
          <Text fontSize="2xl" fontFamily="Georgia">YouTube</Text>
        </Link>
      </button>
      </NextLink>
    </Flex>
  )
}

export default Socials;