import { ColeImage, ChrisImage, DeanImage } from "../../public/images";
import Bio from "./Bio"

const ColeSummary = `Cole is a Charleston, SC based musician studying at the College of Charleston and is the
 bassist of Botanical Selections. He started his musical career at an early age playing cello in orchestras from
  the fourth grade up until college. While playing classical music during the day Cole more and more gravitated to learning 
  guitar by listening to the old delta blues and bass from garage rock and hip hop. Eventually Cole quit the bass in favor
   of focusing on guitar and cello. He refound his love of the low end when filling in on bass for what was supposed to be just
    a one time thing but once the gig was over he decided to prioritize playing bass. Over the years Cole has played with many 
    different groups in the Charleston area from empty bars to large festivals.`

const ChrisSummary = `Chris is a software engineer at BoomTown based in Charleston, SC. He grew up around music
 and started playing the drums at his church at age 12. In highschool he started to play out with a few bands 
 he had started and enjoyed playing blues, hard rock, and punk. When entering the College of Charleston as a 
 music major he learned jazz in order to get into the program. He pulls from his many genres of music and 
 experience to play with Botanical Selections at places spanning from local bars to music venues in Charleston.`

const DeanSummary = `Dean is a music teacher, and guitarist based in Beaufort, SC. He grew up playing a
variety of instruments, but finally settled into the guitar in High School. His style of
playing draws influences from blues, jazz, bluegrass, rock, and world music.
Dean received a B.A in music with a concentration in Jazz Performance from the
College of Charleston. During his four years studying music in Charleston he became
immersed in the Charleston music scene. He has played in a wide variety of musical
settings, from jazz ensembles to backing local hip-hop artists to playing in the pit
orchestra for theaters. He now makes his living teaching music at a private school in
Beaufort and playing gigs in the lowcountry area.`


const AboutUs = () => {
   return (
      <>
         <Bio image={DeanImage} summary={DeanSummary} name="Dean Harris" />
         <Bio image={ChrisImage} summary={ChrisSummary} name="Chris Taylor" />
         <Bio image={ColeImage} summary={ColeSummary} name="Cole Vanderwege" />
      </>
   )
}
export default AboutUs