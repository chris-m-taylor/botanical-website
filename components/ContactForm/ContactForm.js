import { Button, Show, Stack, Text } from "@chakra-ui/react";
import styles from './styles.module.css'

const ContactForm = () => {
   return(
         <Stack direction='column' alignItems='center' marginTop={200} marginBottom={300}>
            <Text fontSize='7xl'>
               Contact Us
            </Text>
            <Text fontSize='xl' m={5} paddingBottom={5}>
               BotanicalSelections@gmail.com
            </Text >
            <Button color='green.100' backgroundColor='green.900' size='lg' m={10}>
               <a href="mailto:botanicalselections@gmail.com">
                  EMAIL US
               </a>
            </Button>
         </Stack> 
   )
}

export default ContactForm;