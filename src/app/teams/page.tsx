"use client"

import { Container, Grid, Image, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";

const teams = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTeamMembers();
  }, []);

  return (
    <Container maxW={{base: "360px", md: "1920px"}} bgColor={"black"} p={"48px"}>
      <Text fontSize={{base: "24px", md: "48px"}} textColor={"white"} textAlign={"center"}>Our Experts</Text>
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: `repeat(3, 1fr)`}} gap={{base: "20px", md: undefined}}>
        {teamMembers.map((member, index) => {
          return (
            <Container 
              bgColor={'darkgray'} 
              borderRadius={"12px"} 
              textAlign={"center"}
              h={"350px"}
              w={"280px"}
              px={"5px"}
            >
              <Text bgColor={"orange"} borderRadius={"8px"} w={"250px"} m={"auto"} mt={"10px"}>{member.name.first} {member.name.last}</Text>
              <Container h={"300px"} w={"250px"} my={"4px"} p={0} justifySelf={"center"}>
                <Image 
                  src={member.picture.medium}
                  alt='foto member'
                  borderRadius={"8px"}
                  objectFit={"cover"}
                  h={"100%"}
                  w={"100%"}
                />
              </Container>
            </Container>
          )
        })}
      </Grid>
    </Container>
  )
}

export default teams