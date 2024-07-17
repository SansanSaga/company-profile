import { getServices } from '@/libs/contentful';
import { Container } from '@chakra-ui/react';

const Services = async () => {

  const data = await getServices();
  // console.log("isi data",data);

  return (
    <Container w={"1920px"} bgColor={"black"}>
      {/* <Services services={data?.items} button={false}/> */}
    </Container>
  )
}

export default Services