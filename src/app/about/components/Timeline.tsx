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
            <Text textColor={"white"}>{desc}</Text>
          </AbsoluteCenter>
        </Box>
        <Grid templateColumns={"repeat(2, 1fr)"} >
          <Container alignContent={"center"}>
            <Text textColor={"gray"} fontSize={"24px"}>{isi}</Text>
          </Container>
          <Container w={"560px"} h={"600px"} p={0}>
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
            <Text textColor={"white"}>{desc}</Text>
          </AbsoluteCenter>
        </Box>
        <Grid templateColumns={"repeat(2, 1fr)"}>
          <Container w={"560px"} h={"600px"} p={0}>
            <Image
              src={`https://${image}`}
              alt='foto'
              objectFit={"cover"}
              h={"100%"}
              w={"100%"}
            />
          </Container>
          <Container alignContent={"center"}>
            <Text textColor={"gray"} fontSize={"24px"}>{isi}</Text>
          </Container>
        </Grid>
      </>
    )
  }
}

export default Timeline