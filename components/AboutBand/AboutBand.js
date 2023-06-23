import { Text } from "@chakra-ui/react"

const botanicalSummary = `Botanical Selections is a one of a kind band in Charleston SC 
that focuses on producing music in collaboration with local rappers to create a unique 
sound. They are also a stand alone band where they play a vast amount of genres ranging 
from jazz to funk. Having played at the Pour House, Purple Buffalo, and many other local
 bars in Charleston SC, Botanical Selections has learned how to throw a great show and have
  fun with the crowd.`

const AboutBand = () => {
   return(
      <Text margin={10} textAlign='left' fontSize={20} fontWeight={600}>{botanicalSummary}</Text>
   )
}
export default AboutBand