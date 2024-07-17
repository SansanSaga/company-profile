import { getAbout } from '@/libs/contentful';
import { Container, Text } from '@chakra-ui/react';
import Timeline from './components/Timeline';

const About = async () => {

  const abouts = await getAbout();
  
  return (
    <Container maxW={"1920px"} bgColor={"black"} p={"40px"} alignContent={"center"} textAlign={"center"}>
      <Text textColor={"white"}>COMPANY TIMELINE</Text>
      {abouts?.map((about, index) => {
        return (
          <Timeline 
            desc={about.desc}
            isi={about.isi}
            image={about.image.fields.file.url}
            index={index}
          />
        )
      })}
    </Container>
  )
}

export default About