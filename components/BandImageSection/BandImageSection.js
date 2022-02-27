import { BandImage } from "../../public/images";
import styles from "./styles.module.css"

const BandImageSection = () => {
   return(
         <img class={styles.img} src={BandImage.src} />
   )
}

export default BandImageSection;