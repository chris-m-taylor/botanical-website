import { HamburgerIcon } from "@chakra-ui/icons"
import React from "react"
import { Box, Button, Grid, useDisclosure, Input, Stack } from "@chakra-ui/react"
import NextLink from "next/link"
import {
   Drawer,
   DrawerBody,
   DrawerFooter,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
} from '@chakra-ui/react'
import Nav from "./nav"
import Socials from "./Socials/Socials"


const SmallNav = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef()
   
   return (
      <>
         <Grid templateColumns='1fr 1fr'>
            <Box textAlign='center' m='auto' ml='2' fontSize='2xl'>
               <NextLink href="/"><img src="/images/Botanical Selections logo Banner.jpg"/></NextLink>
            </Box>

            <Box textAlign='right'>
               <Button backgroundColor='green.500' m={5} width={19} onClick={onOpen}>
                  <HamburgerIcon color='#8fd7a7' />
               </Button>
            </Box>

         </Grid>

         <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            backgroundColor='white'
         >
            <DrawerOverlay />
            <DrawerContent>
               <DrawerCloseButton />
               <DrawerHeader color="white">Botanical Selections</DrawerHeader>

               <DrawerBody>
                  <Stack margin={5}>
                     <Nav/>            
                  </Stack>
                  <Socials />
                  
               </DrawerBody>

            </DrawerContent>
         </Drawer>
      </>


   )
}

export default SmallNav
