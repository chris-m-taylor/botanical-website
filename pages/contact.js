import Navbar from '../components/Navbar/navbar';
import { Box, Center } from '@chakra-ui/react'
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return(
    <Box backgroundColor="black">
      <Navbar />
      <Center>
        <ContactForm />
      </Center>
      <Footer />
    </Box>
  )
}
