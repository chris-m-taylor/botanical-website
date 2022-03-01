import { Box, Flex, Grid, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import Nav from "./nav";

const LargeNav = () => {
   return (
      <Grid templateColumns='1fr 1fr 1fr'>

         <Flex margin={5}>
            <Nav instagram={false}/>
         </Flex>

         <Box textAlign='center' m='auto' fontSize='2xl'>
            <NextLink href="/">BOTANICAL SELECTIONS</NextLink>
         </Box>

         <NextLink href="https://www.instagram.com/botanicalselectionsband/" passHref={true}>
            <Link target='_blank' color='pink.200' px={3} textAlign='center' m='auto'>
               <Text fontSize="2xl">Instagrams</Text>
            </Link>
         </NextLink>
      </Grid>
   )
}

export default LargeNav;