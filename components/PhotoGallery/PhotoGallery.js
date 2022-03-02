import { Box, Flex, Grid, Show } from '@chakra-ui/react';
import { GalleryImages } from '../../public/images';
import styles from './styles.module.css';


const RenderGallery = ( images ) => {
   
   let imagesHtml = images.map((image, index) => {
      return <img key={index} className={styles.image} src={image.src}></img>
   })

   return (
      <>
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
      </>

   )
}

const PhotoGallery = () => {
   
   return (
      <Box margin={10}>
         {RenderGallery(GalleryImages)}
      </Box>
   )
}

export default PhotoGallery;