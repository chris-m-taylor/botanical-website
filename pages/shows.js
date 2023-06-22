import React, { useEffect } from "react"
import BandsInTown from '../components/BandsInTown/BandsInTown.js';
import Footer from "../components/Footer/Footer.js";
import { Box } from "@chakra-ui/react";
import Head from "next/head.js";
import Navbar from "../components/Navbar/navbar.js";

export default function Shows() {
  
  return (
    <Box backgroundImage={'url(/images/GlitchedBackground.png)'}>
      <Head>
        <title>Shows - Botanical Selctions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <BandsInTown />
      <Footer />
    </Box>
  )
}
