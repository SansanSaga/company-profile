import { Box, Container, Grid, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface Jumbotron {
  title: string,
  desc: string,
  images: { fields: { file: { url: string } } }[],
}

const Jumbotron: FC<Jumbotron> = ({ title, desc, images }) => {
  return (
    <>
      <Container maxW={{base: "768px", md: "1920px"}} bgColor={"black"} p={"40px"} >
        <Grid
          templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}
          gap={0}
        >
          <Box alignContent={"center"} border={"1px solid white"} p={"20px"}>
            <Text fontSize={{base: "20px", md: "40px"}} fontWeight={"semibold"} textColor={'white'}>{title}</Text>
            <Text fontSize={{base:"12px", md: "24px"}} textColor={"white"} noOfLines={4}>{desc}</Text>
          </Box>
          <Box h={{base: "180px", md: "380px"}}>
            <Image
              src={`https://${images[0].fields.file.url}`}
              alt='konstruksi2'
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
            />
          </Box>
        </Grid>
        <Grid
          templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}
          gap={0}
        >
          {images.map((image, index) => {
            if (index !== 0) {
              return (
                <Box h={{base: "180px", md: "380px"}}>
                  <Image
                    src={`https://${image.fields.file.url}`}
                    alt='konstruksi'
                    w={"100%"}
                    h={"100%"}
                    objectFit={"cover"}
                  />
                </Box>
              )
            }
          })}
        </Grid>
      </Container>
    </>
  )
}

export default Jumbotron