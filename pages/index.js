import Navbar from '../components/Navbar/navbar';
import BandImageSection from '../components/BandImageSection/BandImageSection'
import {Box} from '@chakra-ui/react'
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <Box backgroundColor='black'>
      <Navbar />
      <BandImageSection />
      <PhotoGallery />
      <Footer />
    </Box>
    
  )
}
