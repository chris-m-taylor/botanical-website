import { Box, Text } from "@chakra-ui/react"
import NextLink from "next/link"



const Footer = () => {
   return(
      <Box textAlign='center' m={20} backgroundColor={"RGBA(0, 0, 0, 0.04)"} borderRadius={'10'}>
         <Text fontSize='xl' color="#e88fe9">Botanical Selections is a local band from Charleston SC</Text>
      </Box>
      //toodoo add custom icons that link to socials
   )
}
export default Footer