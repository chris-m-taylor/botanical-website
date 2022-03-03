import { Box, Text } from "@chakra-ui/react"
import Head from "next/head";
import AboutUs from "../components/About/AboutUs";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/navbar";


const About = () => {
   return (
      <Box backgroundColor='black'>
         <Head>
            <title>About - Botanical Selctions</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>
         <Navbar />
         <AboutUs />
         <Footer />

      </Box>
   )
}
export default About;