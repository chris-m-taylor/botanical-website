import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../components/Theme/_theme'
import styles from '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
