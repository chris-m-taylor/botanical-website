import { Box, Flex, Grid, Show } from '@chakra-ui/react'
import { GalleryImages } from '../../public/images'
import styles from './styles.module.css'


const PhotoGallery = () => {
   let imagesHtml = GalleryImages.map((image, index) => {
      return <img class={styles.image} src={image.src}></img>
   })
   return (
      <Box margin={10}>
         <Show above="1050px">
            <Grid templateColumns='1fr 1fr 1fr' templateRows='1fr 1fr'>
               {imagesHtml}
            </Grid>
         </Show>
         <Show below="1049px">
            <Grid templateColumns='1fr 1fr' templateRows='1fr 1fr 1fr'>
               {imagesHtml}
            </Grid>
         </Show>

      </Box>
   )
}

export default PhotoGallery;