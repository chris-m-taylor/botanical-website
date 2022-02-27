import { BandImage } from "../../public/images";
import NextImage from 'next/image'
import { Text } from "@chakra-ui/react";
import styles from "./styles.module.css"



const BandImageSection = () => {
   return(
      <section class={styles.container}>
         <NextImage src={BandImage} ></NextImage>
         <p class={styles.text}>Botanical Selections</p>
      </section>
   )
}

export default BandImageSection;