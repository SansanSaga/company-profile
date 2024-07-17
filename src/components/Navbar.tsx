"use client"

import { Container, Flex, Grid, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = () => {

  return (
    <>
      {/* 1920px 2560px */}
      <Container maxW={{base: "360px", md: "1920px"}} bgColor={"white"} zIndex={999} >
        <Grid templateColumns={"repeat(2, 1fr)"}>
          <Link href={"/"}>
            <Image w={{base: "16px", md: "32px"}} h={{base: "16px", md: "32px"}} 
              src="/surveillance-defense-svgrepo-com.svg" alt='Logo' 
            />
          </Link>
          <Flex alignItems={"center"} flexDirection={"row-reverse"} justifyContent={"space-evenly"}>
            <Link href={"/about"}>
              <Text fontSize={{base: "8px", md: "16px"}}>About</Text>
            </Link>
            <Link href={"/teams"}>
              <Text fontSize={{base: "8px", md: "16px"}}>Teams</Text>
            </Link>
            <Link href={"/services"}>
              <Text fontSize={{base: "8px", md: "16px"}}>Services</Text>
            </Link>
            <Link href={"/"}>
              <Text fontSize={{base: "8px", md: "16px"}}>Home</Text>
            </Link>
          </Flex>
        </Grid>
      </Container>
    </>
  )
}

export default Navbar