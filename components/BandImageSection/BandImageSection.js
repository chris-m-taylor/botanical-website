import { BandImage } from "../../public/images";
import NextImage from 'next/image'
import { Text } from "@chakra-ui/react";
import styles from "./styles.module.css"



const BandImageSection = () => {
   return(
      <section class={styles.container}>
         <NextImage src={BandImage}></NextImage>
         <Text class={styles.centered}>Test</Text>
      </section>
   )
}

export default BandImageSection;