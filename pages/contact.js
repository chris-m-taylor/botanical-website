import Navbar from '../components/Navbar/navbar';
import { Center } from '@chakra-ui/react'
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Center>
        <ContactForm />
      </Center>
      <Footer />
    </>


  )
}