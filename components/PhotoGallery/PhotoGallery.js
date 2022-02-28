import { Flex } from '@chakra-ui/react'
import {GalleryImages} from '../../public/images'
import styles from './styles.module.css'


const PhotoGallery = () => {
   let imagesHtml = GalleryImages.map((image, index) => {
      return <img class={styles.image} src={image.src}></img>
   })
   return(
      <Flex wrap='wrap' justifyContent='space-between'>
         {imagesHtml}
      </Flex>
   )
}

export default PhotoGallery;