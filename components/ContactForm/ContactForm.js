import { Button, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const sendPost = async (fullName, email, message, recaptchaValue) => {

  if (!fullName || !email || !message || !recaptchaValue) {
    console.log("NEED TO FILL OUT ALL FIELDS")
    toast('Fill out all fields of form.', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return
  }

  let body = {
    "fullName": fullName,
    "senderEmail": email,
    "message": message,
    "recaptchaToken": recaptchaValue,
  }

  let emailToast = toast.info('Sending email...', {
    position: "top-left",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    });

  const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
      }
    );

  if (!response.ok) {
    toast.update(emailToast, 
      {
        type: toast.TYPE.ERROR,
        render: 'Problem sending email, please message us on Instagram',
        autoClose: 5000,
        progress: undefined,
      });
    console.log(response);
  }
  else{
    toast.update(emailToast, 
      {
        type: toast.TYPE.SUCCESS,
        render: 'Email Sent!',
        autoClose: 5000,
        progress: undefined,
      }
    )
    console.log(response);
  }
}

const ContactForm = () => {
  const [fullName, setFullName] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)
  const recaptchaRef = useRef(null)
  const [recaptchaValue, setRecaptchaValue] = useState(null)

  const recapatchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <>
      <ToastContainer
        position="top-left"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Stack direction='column' alignItems='center' marginTop={200} marginBottom={300} background="black">
        <Text fontSize='7xl'>Contact Us</Text>

        <Stack>
          <Text fontSize='6xl' textAlign='center'>Send us an email</Text>

          <Input placeholder="First and Last Name" onChange={(event) => setFullName(event.target.value)}></Input>
          <Input placeholder="Email" onChange={(event) => setEmail(event.target.value)}></Input>
          <Textarea placeholder="Message" onChange={(event) => setMessage(event.target.value)}></Textarea>
          <ReCAPTCHA ref={recaptchaRef} sitekey={recapatchaSiteKey} onChange={setRecaptchaValue} />
          <Button onClick={() => sendPost(fullName, email, message, recaptchaValue)} color='green.100' backgroundColor='green.900' size='lg' m={10}>Send</Button>
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
    </>
  )
}

export default ContactForm;