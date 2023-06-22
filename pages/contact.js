import Navbar from '../components/Navbar/navbar';
import { Box, Center } from '@chakra-ui/react'
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';

export default function Contact() {
  return(
    <Box backgroundImage={'url(/images/GlitchedBackground.png)'}>
      <Head>
        <title>Contact - Botanical Selctions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Center>
        <ContactForm />
      </Center>
      <Footer />
    </Box>
  )
}
