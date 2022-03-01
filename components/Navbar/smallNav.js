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


const SmallNav = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef()
   
   return (
      <>
         <Grid templateColumns='1fr 1fr'>
            <Box textAlign='center' m='auto' ml='2' fontSize='2xl'>
               <NextLink href="/">BOTANICAL SELECTIONS</NextLink>
            </Box>

            <Box textAlign='right'>
               <Button backgroundColor='green.500' m={5} width={19} onClick={onOpen}>
                  <HamburgerIcon color='green.50' />
               </Button>
            </Box>

         </Grid>

         <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            backgroundColor='black'
         >
            <DrawerOverlay />
            <DrawerContent>
               <DrawerCloseButton />
               <DrawerHeader>BotanicalSelections</DrawerHeader>

               <DrawerBody>
                  <Stack margin={5}>
                     <Nav instagram={true}/>
                  </Stack>
                  
               </DrawerBody>

            </DrawerContent>
         </Drawer>
      </>


   )
}

export default SmallNav
