import React, { useEffect } from "react"
import BandsInTown from '../components/BandsInTown/BandsInTown.js';
import Footer from "../components/Footer/Footer.js";
import { Box } from "@chakra-ui/react";
import Head from "next/head.js";
import Navbar from "../components/Navbar/navbar.js";
import Script from "next/script.js";

export default function Shows() {
  
  useEffect(() => {console.log("test")});
  
  return (
    <Box backgroundColor='black'>
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

// https://betterprogramming.pub/loading-third-party-scripts-dynamically-in-reactjs-458c41a7013d for help