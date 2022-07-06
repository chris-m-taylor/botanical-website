import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../components/Theme/_theme'
import { useEffect } from 'react';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {

  // Nessescary evil since Next.js does not support route change script loading.
  // This code continuously loads the same script without deleting old ones. Would be good to fix this in the future.
  useEffect(() => {
    "use strict";
    Router.events.on("routeChangeComplete", (path) => {
      console.log(`Route change complete.`);
      setTimeout(() => {
        const script = document.createElement("script");
        script.src = `/scripts/bandsintown/main.min.js`;
        script.defer = true;
        document.body.appendChild(script);
        return () => { document.body.removeChild(script) }
      }, 0);
      });
 
      return () => {
        Router.events.off('routeChangeComplete', 0);
    }
  }, [Router]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
