import { Box, Show } from "@chakra-ui/react"
import LargeNav from "./largeNav";
import SmallNav from "./smallNav";


const Navbar = () => {
   return (
      <Box>

         <Show breakpoint='(min-width: 1059px)'>
            <LargeNav />
         </Show>

         <Show breakpoint="(max-width: 1058px)">
            <SmallNav />
         </Show>

      </Box>

   )
}

export default Navbar;