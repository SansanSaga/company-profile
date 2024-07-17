"use client"

import { Container, Flex, Grid, Image } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = () => {

  return (
    <>
      {/* 1920px 2560px */}
      <Container maxW={"1920px"} bgColor={"white"} zIndex={999} >
        <Grid templateColumns={"repeat(2, 1fr)"}>
          <Link href={"/"}>
            <Image w={"32px"} h={"32px"} 
              src="/surveillance-defense-svgrepo-com.svg" alt='Logo' 
            />
          </Link>
          <Flex alignItems={"center"} flexDirection={"row-reverse"} justifyContent={"space-evenly"}>
            <Link href={"/about"}>About</Link>
            <Link href={"/teams"}>Teams</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/"}>Home</Link>
          </Flex>
        </Grid>
      </Container>
    </>
  )
}

export default Navbar