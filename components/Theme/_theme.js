// theme.js

// 1. import `extendTheme` function
import { color, extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
   initialColorMode: 'dark',
   useSystemColorMode: false,
}

// 3. extend the theme https://github.com/chakra-ui/chakra-ui/discussions/5048
const theme = extendTheme({ 
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: '#f0ebeb',
        color: "black"
      }
    })
  }
 })

export {theme}