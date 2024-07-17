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
        return <Text fontSize={{base: "24px", md: "48px"}} fontWeight={"semibold"} textColor={"white"}>{children}</Text>
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <UnorderedList color={"lightgrey"} spacing={"8px"}>{children}</UnorderedList>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Text textColor={"white"} my={"8px"}>{children}</Text>
      }
    }
  }

  return (
    <Container maxW={{base: "360px", md: "1920px"}} bgColor={"black"} p={"48px"}>
      <Text fontSize={{base: "36px", md: "72px"}} textColor={"white"}>Our Services</Text>
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}} my={"48px"}>
        <Container w={{base: "280px", md: "560px"}} h={{base: "300px", md: "600px"}} p={0} mb={{base: "20px", md: undefined}}>
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
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}} my={"48px"}>
        <Container alignContent={"center"}>
          {documentToReactComponents(services[1].fields.isi, RICHTEXT_OPTIONS)}
          {button ? (<ReadMoreButton />) : undefined}
        </Container>
        <Container w={{base: "280px", md: "560px"}} h={{base: "300px", md: "600px"}} p={0} mt={{base: "20px", md: undefined}}>
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