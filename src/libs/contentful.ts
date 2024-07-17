import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!,
});

export const getHomePage = async () => {
  try {
    const response = await client.getEntries({
      content_type: "home",
    });

    const hasil = response.items.map((hasil:any) => {
      return {
        jumbotron: hasil.fields.jumbotron,
        projects: hasil.fields.projects,
        services: hasil.fields.services,
        overview: hasil.fields.overview,
      };
    });
    return hasil[0];
    
  } catch (error) {
    console.log(error); 
  }
}

export const getProjects = async (banyak:number = 0) => {
  try {
    const response = await client.getEntries({
      limit: Boolean(banyak) ? banyak : undefined,
      content_type: "projects",
    });

    const hasil = response.items.map((hasil:any) => {
      return {
        title: hasil.fields.title,
        thumbnail: hasil.fields.thumbnail,
        slug: hasil.fields.slug,
        testimoni: hasil.fields.testimoni,
      };
    });
    return hasil;
      
    } catch (error) {
      console.log(error); 
  }
}

export const getServices = async (banyak:number = 0) => {
  try {
    const response:any = await client.getEntries({
      limit: Boolean(banyak) ? banyak : undefined,
      content_type: "ccServices",
    });

    return response.items;
    
  } catch (error) {
    console.log(error); 
  }
}

export const getAbout = async (banyak:number = 0) => {
  try {
    const response = await client.getEntries({
      limit: Boolean(banyak) ? banyak : undefined,
      content_type: "ccAbout",
    });

    const hasil = response.items.map((hasil:any) => {
      return {
        desc: hasil.fields.desc,
        isi: hasil.fields.isi,
        image: hasil.fields.image,
      };
    });
    return hasil;
      
    } catch (error) {
      console.log(error); 
  }
}