import { Box, Container, Grid, Text } from '@chakra-ui/react'
// import ShareButtons from './ShareButtons'

const Footer = () => {
  return (
    <Container maxW={"1920px"} bgColor={"lightgray"}>
      <Grid justifyContent={'space-between'} templateColumns={"repeat(2, 1fr)"}>
        <Grid templateColumns={"repeat(2, 1fr"}>
          <Text>PT Azimuth Pastindo Mandiri</Text>
          <Box>
            <Text>Jl. Inspeksi Kalimalang No.162,</Text>
            <Text>Gandasari, Cikarang Barat,</Text>
            <Text>Kab.Bekasi 17350, Jawa Barat,</Text>
            <Text>Indonesia</Text>
          </Box>
        </Grid>
        <Container>
          {/* <ShareButtons /> */}
        </Container>
      </Grid>
    </Container>
  )
}

export default Footer