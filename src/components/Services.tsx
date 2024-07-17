import { Container, Divider, Grid, Image, Text, UnorderedList } from '@chakra-ui/react';
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';
import { FC } from 'react';
import ReadMoreButton from './ReadMoreButton';

type Service = {
  services: {
    fields: {
      title: string,
      isi: any,
      image: { fields: { file: { url: string } } },
    }
  }[],
  button: boolean,
}

const Services: FC<Service> = ({ services, button }) => {

  const RICHTEXT_OPTIONS: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => {
        return <Text fontSize={"48px"} fontWeight={"semibold"} textColor={"grey"}>{children}</Text>
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <UnorderedList color={"lightgrey"} spacing={"8px"}>{children}</UnorderedList>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Text textColor={"grey"} my={"8px"}>{children}</Text>
      }
    }
  }

  return (
    <Container maxW={"1920px"} bgColor={"black"} p={"48px"}>
      <Text fontSize={"72px"} textColor={"grey"}>Our Services</Text>
      <Grid templateColumns={"repeat(2, 1fr)"} my={"48px"}>
        <Container w={"560px"} h={"600px"} p={0}>
          <Image
            src={`https://${services[0].fields.image.fields.file.url}`}
            alt='service'
            objectFit={"cover"}
            h={"100%"}
            w={"100%"}
          />
        </Container>
        <Container alignContent={"center"}>
          {documentToReactComponents(services[0].fields.isi, RICHTEXT_OPTIONS)}
          {button ? (<ReadMoreButton />) : undefined}
        </Container>
      </Grid>
      <Divider />
      <Grid templateColumns={"repeat(2, 1fr)"} my={"48px"}>
        <Container alignContent={"center"}>
          {documentToReactComponents(services[1].fields.isi, RICHTEXT_OPTIONS)}
          {button ? (<ReadMoreButton />) : undefined}
        </Container>
        <Container w={"560px"} h={"600px"} p={0}>
          <Image
            src={`https://${services[1].fields.image.fields.file.url}`}
            alt='service'
            objectFit={"cover"}
            h={"100%"}
            w={"100%"}
          />
        </Container>
      </Grid>
      <Divider />
    </Container>
  )
}

export default Services