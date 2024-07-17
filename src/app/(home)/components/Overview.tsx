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
        return <Text textColor={"grey"} fontSize={"24px"}>{children}</Text>
      }
    }
  }

  return (
    <>
      <Container maxW={"1920px"} bgColor={"black"} p={"48px"}>
        <Divider mb={"40px"}/>
        <Grid templateColumns={"repeat(2, 1fr)"}>
          <Container w={"560px"} h={"600px"} p={0}>
            <Image 
              src={`https://${overview.fields.image.fields.file.url}`}
              alt='foto'
              objectFit={"cover"}
              h={"100%"}
              w={"100%"}
            />
          </Container>
          <Container alignContent={"center"}>
            {documentToReactComponents(overview.fields.overview, RICHTEXT_OPTIONS)}
          </Container>
        </Grid>
        <Divider mt={"40px"}/>
      </Container>
    </>
  )
}

export default Overview