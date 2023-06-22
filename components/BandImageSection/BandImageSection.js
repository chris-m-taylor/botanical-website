import { Show } from "@chakra-ui/react";
import { BandImage } from "../../public/images";
import styles from "./styles.module.css"

const BandImageSection = () => {
   return(
         <>
         <Show above="1050px">
            <img className={styles.imgLarge} src={"images/pictureOfBandGlitch1.jpg"} />
         </Show>
         <Show below="1049px">
            <img className={styles.imgSmall} src={"images/pictureOfBandGlitch1.jpg"} />
         </Show>
         </>
   )
}

export default BandImageSection;