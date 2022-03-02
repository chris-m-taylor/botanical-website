import { Button, Show, Stack, Text } from "@chakra-ui/react";

const ContactForm = () => {
   return(
         <Stack direction='column' alignItems='center' marginTop={200} marginBottom={300} background="black">
            <Text fontSize='7xl'>
               Contact Us
            </Text>
            <Text fontSize='xl' m={5} paddingBottom={5}>
               @BotanicalSelectionsBand
            </Text >
            <Button color='green.100' backgroundColor='green.900' size='lg' m={10}>
               <a href="https://www.instagram.com/botanicalselectionsband/">
                  DM US
               </a>
            </Button>
         </Stack> 
   )
}

export default ContactForm;