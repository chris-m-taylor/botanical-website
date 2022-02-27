import Navbar from '../components/Navbar/navbar';
import BandImageSection from '../components/BandImageSection/BandImageSection'
import {Box} from '@chakra-ui/react'

export default function Home() {
  return (
    <Box backgroundColor='black'>
      <Navbar />
      <BandImageSection />
    </Box>
    
  )
}
