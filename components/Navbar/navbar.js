import { Box, Show } from "@chakra-ui/react"
import LargeNav from "./largeNav";
import SmallNav from "./smallNav";


const Navbar = () => {
   return (
      <Box backgroundColor="white" border="solid" borderBottomWidth="5px" borderTopColor="#8fd7a7" borderBottomColor="rgb(230, 144, 233)" 
      position="inherit" top="0" left="0">

         <Show breakpoint='(min-width: 1059px)'>
            <LargeNav border-bottom="solid;"/>
         </Show>

         <Show breakpoint="(max-width: 1058px)">
            <SmallNav />
         </Show>

      </Box>

   )
}

export default Navbar;