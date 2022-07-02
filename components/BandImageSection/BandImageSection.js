import { Show } from "@chakra-ui/react";
import { BandImage } from "../../public/images";
import styles from "./styles.module.css"

const BandImageSection = () => {
   return(
         <>
         <Show above="1050px">
            <img className={styles.imgLarge} src={BandImage.src} />
         </Show>
         <Show below="1049px">
            <img className={styles.imgSmall} src={BandImage.src} />
         </Show>
         </>
   )
}

export default BandImageSection;