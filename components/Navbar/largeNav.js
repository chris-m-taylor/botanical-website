import { Box, Flex, Grid, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import Nav from "./nav";
import Socials from "./Socials/Socials";

const LargeNav = () => {
   return (
      <Grid templateColumns='1fr 1fr 1fr' mt={2.5} mb={2.5}>

         <Flex justifyContent='space-around'>
            <Nav/>
         </Flex>

         <Box textAlign='center' fontSize='2xl'>
            <NextLink href="/"><img src="/images/Botanical Selections logo Banner.jpg"/></NextLink>
         </Box>

         <Socials />
      </Grid>
   )
}

export default LargeNav;