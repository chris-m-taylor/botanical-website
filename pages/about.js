import { Box, Text } from "@chakra-ui/react"
import AboutUs from "../components/About/AboutUs";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/navbar";


const About = () => {
   return(
      <Box backgroundColor='black'>
         <Navbar />
         <AboutUs />
         <Footer />
         
      </Box>
   )
}
export default About;