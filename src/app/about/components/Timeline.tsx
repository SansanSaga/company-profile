import { AbsoluteCenter, Box, Container, Divider, Grid, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'

type Timeline = {
  desc: string,
  isi: string,
  image: string,
  index: number,
}

const Timeline: FC<Timeline> = ({desc, isi, image, index}) => {
  if (index % 2 == 0) {
    return (
      <>
        <Box position='relative' padding='10'>
          <Divider />
          <AbsoluteCenter bg='black' px='4'>
            <Text textColor={"white"} fontSize={{base: "8px", md: "16px"}}>{desc}</Text>
          </AbsoluteCenter>
        </Box>
        <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}} >
          <Container alignContent={"center"}>
            <Text textColor={"gray"} fontSize={{base: "12px", md: "24px"}} py={"8px"}>{isi}</Text>
          </Container>
          <Container w={{base: "280px", md: "560px"}} h={{base: "300px", md: "600px"}} p={0} py={"8px"}>
            <Image
              src={`https://${image}`}
              alt='foto'
              objectFit={"cover"}
              h={"100%"}
              w={"100%"}
            />
          </Container>
        </Grid>
      </>
    )
  } else {
    return (
      <>
        <Box position='relative' padding='10'>
          <Divider />
          <AbsoluteCenter bg='black' px='4'>
            <Text textColor={"white"} fontSize={{base: "8px", md: "16px"}}>{desc}</Text>
          </AbsoluteCenter>
        </Box>
        <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}} py={"12px"}>
          <Container w={{base: "280px", md: "560px"}} h={{base: "300px", md: "600px"}} p={0} py={"8px"}>
            <Image
              src={`https://${image}`}
              alt='foto'
              objectFit={"cover"}
              h={"100%"}
              w={"100%"}
            />
          </Container>
          <Container alignContent={"center"}>
            <Text textColor={"gray"} fontSize={{base: "12px", md: "24px"}} py={"8px"}>{isi}</Text>
          </Container>
        </Grid>
      </>
    )
  }
}

export default Timeline