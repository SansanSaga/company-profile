import { Container, Grid, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'

type Projects = {
  projects: {
    fields: {
      title: string,
      slug: string,
      thumbnail: { fields: { file: { url: string } } },
      testimoni: string,
    }
  }[]
}

const Projects: FC<Projects> = ({ projects }) => {
  return (
    <Container maxW={{base: "360px", md: "1920px"}} bgColor={"gray"} p={{base: "20px", md: "40px"}} alignContent={"center"} pb={"80px"}>
      <Container 
        bgColor={"dimgray"} 
        textAlign={"center"} 
        mb={"40px"}
        p={0}
        borderRadius={"16px"}
        border={"1px solid black"}
      >
        <Text fontSize={{base: "20px", md: "40px"}} textColor={"white"}>
          Projects and Commentaries
        </Text>
      </Container>
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: `repeat(3, 1fr)`}} gap={{base: "20px", md: undefined}}>
        {projects.map((project, index) => {
          return (
            <Container 
              bgColor={'darkgray'} 
              borderRadius={"12px"} 
              textAlign={"center"}
              h={"400px"}
              w={"280px"}
              px={"5px"}
            >
              <Text bgColor={"orange"} borderRadius={"8px"} w={"250px"} m={"auto"} mt={"10px"}>{project.fields.title}</Text>
              <Container h={"300px"} w={"250px"} my={"4px"} p={0} justifySelf={"center"}>
                <Image 
                  src={`https://${project.fields.thumbnail.fields.file.url}`}
                  alt='foto projek'
                  borderRadius={"8px"}
                  objectFit={"cover"}
                  h={"100%"}
                  w={"100%"}
                />
              </Container>
              <Container bgColor={"darkgray"}>
                <Text>{project.fields.testimoni}</Text>
              </Container>
            </Container>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Projects