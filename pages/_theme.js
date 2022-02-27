// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
   initialColorMode: 'dark',
   useSystemColorMode: false,
   styles: {
      global: (props) => ({
         body: {
            bg: mode(white(string), black(string))(props),
         }
      })
   }
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme