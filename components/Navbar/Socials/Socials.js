import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

const Socials = () => {
  return(
    <Flex textAlign='center' justifyContent='space-evenly' >
      <NextLink href="https://www.instagram.com/botanicalselectionsband/" passHref={true} padding={0} margin={0}>
        <Link target='_blank' color='pink.200'>
        <Text fontSize="2xl">Instagram</Text>
        </Link>
      </NextLink>
      <NextLink href="https://www.youtube.com/channel/UCgqHx-y3cT0fvM0Yo_YBjLA" passHref={true} padding={0} margin={0}>
        <Link target='_blank' color='pink.200'>
          <Text fontSize="2xl">YouTube</Text>
        </Link>
      </NextLink>
    </Flex>
  )
}

export default Socials;