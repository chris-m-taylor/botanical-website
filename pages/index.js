import Navbar from '../components/Navbar/navbar';
import BandImageSection from '../components/BandImageSection/BandImageSection'
import {Box} from '@chakra-ui/react'
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';
import Footer from '../components/Footer/Footer';
import AboutBand from '../components/AboutBand/AboutBand';
import Head from 'next/head';

export default function Home() {
  return (
    <Box backgroundColor='black'>
      <Head>
        <title>Botanical Selctions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <BandImageSection />
      <AboutBand />
      <PhotoGallery />
      <Footer />
    </Box>
    
  )
}
