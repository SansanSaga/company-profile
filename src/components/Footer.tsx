import { Box, Container, Grid, Text } from '@chakra-ui/react'
import ShareButtons from './ShareButtons'
// import ShareButtons from './ShareButtons'

const Footer = () => {
  return (
    <Container maxW={{base: "360px", md: "1920px"}} bgColor={"lightgray"} px={{base: "20px", md: "48px"}} py={"20px"}>
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}>
        <Grid templateColumns={"repeat(2, 1fr)"} textAlign={"center"}>
          <Text fontSize={{base: "8px", md: "16px"}} alignSelf={"center"}>PT Azimuth Pastindo Mandiri</Text>
          <Box alignContent={"center"}>
            <Text fontSize={{base: "8px", md: "16px"}}>Jl. Inspeksi Kalimalang No.160,</Text>
            <Text fontSize={{base: "8px", md: "16px"}}>Gandasari, Cikarang Barat,</Text>
            <Text fontSize={{base: "8px", md: "16px"}}>Kab.Bekasi 17350, Jawa Barat,</Text>
            <Text fontSize={{base: "8px", md: "16px"}}>Indonesia</Text>
          </Box>
        </Grid>
        <Container textAlign={"right"} alignContent={"center"} display={{base: "none", md:"block"}}>
          <ShareButtons title={"PT Azimuth"}/>
        </Container>
      </Grid>
    </Container>
  )
}

export default Footer