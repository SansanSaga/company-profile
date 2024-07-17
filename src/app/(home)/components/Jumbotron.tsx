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
      <Container maxW={"1920px"} bgColor={"red"} p={0}>
        <Grid
          templateColumns={"repeat(2, 1fr)"}
          gap={0}
        >
          <Box alignContent={"center"}>
            <Text fontSize={"40px"} fontWeight={"semibold"} textColor={'white'}>{title}</Text>
            <Text fontSize={"24px"} textColor={"white"} noOfLines={4}>{desc}</Text>
          </Box>
          <Box>
            <Image
              src={`https://${images[0].fields.file.url}`}
              alt='konstruksi2'
              w={"100%"}
              maxH={"400px"}
              objectFit={"cover"}
            />
          </Box>
        </Grid>
        <Grid
          templateColumns={"repeat(2, 1fr)"}
          gap={0}
        >
          {images.map((image, index) => {
            if (index !== 0) {
              return (
                <Box>
                  <Image
                    src={`https://${image.fields.file.url}`}
                    alt='konstruksi'
                    w={"100%"}
                    maxH={"400px"}
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