import { Box, Flex, Text, Show, Center, Stack } from "@chakra-ui/react";
import styles from "./styles.module.css";


const Bio = ({ image, summary, name }) => {
   return (
      <>
         <Center marginBottom={20}>
               <Show above="1050px">
                     <Flex className={styles.bigContainer} justifyContent="center">
                        <img src={image} className={styles.imgLarge}/>
                        <Flex alignItems='center'>
                           <Box>
                              <Text className={styles.name} textAlign='center' color={"#e88fe9"} fontFamily="Georgia">{name}</Text>
                              <Text textAlign='center' className={styles.summary}>{summary}</Text>
                           </Box>
                        </Flex>
                     </Flex>
               </Show>





               <Show below="1049px">
                  <Stack className={styles.card} alignItems='center'>
                     <img src={image.src} className={styles.imgSmall} />
                     <Text className={styles.name} color={"#e88fe9"}>{name}</Text>
                     <Text textAlign='center' verticalAlign='middle' className={styles.summary}>{summary}</Text>
                  </Stack>
               </Show>
         </Center>
      </>
   )
}
export default Bio;