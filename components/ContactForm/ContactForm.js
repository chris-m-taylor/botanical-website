import { Button, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";


const sendPost = async (fullName, email, message) => {
    
    let body = {
        "fullName": fullName,
        "senderEmail": email,
        "message": message
    }
    
    const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
  
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    console.log("email sent!")

}


const ContactForm = () => {
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    return(
         <Stack direction='column' alignItems='center' marginTop={200} marginBottom={300} background="black">
            
            <Text fontSize='7xl'>Contact Us</Text>

            <Stack size>
                <Text fontSize='6xl'>Send us an email</Text>

                <Input placeholder="First and Last Name"  onChange={(event) => setFullName(event.target.value)}></Input>
                <Input placeholder="Email" onChange={(event) => setEmail(event.target.value)}></Input>
                <Textarea placeholder="Message" onChange={(event) => setMessage(event.target.value)}></Textarea>
                <Button onClick={() => sendPost(fullName, email, message)} color='green.100' backgroundColor='green.900' size='lg' m={10}>Send</Button>
            </Stack>
            
            <Text fontSize='4xl'>
               Message us on Instagram
            </Text>
            <Text fontSize='xl' m={5}>
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