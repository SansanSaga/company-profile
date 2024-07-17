import { Container, Divider, Grid, Image, Text } from '@chakra-ui/react';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { FC } from 'react';

type HomeOverview = {
  overview: any,
}

const Overview: FC<HomeOverview> = ({overview}) => {

  const RICHTEXT_OPTIONS: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Text textColor={"white"} fontSize={{base: "12px", md: "24px"}}>{children}</Text>
      }
    }
  }

  return (
    <>
      <Container maxW={{base: "360px", md: "1920px"}} bgColor={"black"} p={{base: "24px", md: "48px"}}>
        <Divider mb={"40px"}/>
        <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}>
          <Container alignContent={"center"}>
            {documentToReactComponents(overview.fields.overview, RICHTEXT_OPTIONS)}
          </Container>
          <Container w={{base: "280px", md: "560px"}} h={{base: "300px", md: "600px"}} p={0} my={"24px"}>
            <Image 
              src={`https://${overview.fields.image.fields.file.url}`}
              alt='foto'
              objectFit={"cover"}
              h={"100%"}
              w={"100%"}
            />
          </Container>
        </Grid>
        <Divider mt={"40px"}/>
      </Container>
    </>
  )
}

export default Overview