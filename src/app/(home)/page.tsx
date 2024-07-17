import Services from "@/components/Services";
import { getHomePage } from "@/libs/contentful";
import Jumbotron from "./components/Jumbotron";
import Overview from "./components/Overview";
import Projects from "./components/Projects";

export default async function Home() {
  const home = await getHomePage();
  // if (!home?.jumbotron || !home?.projects || !home.services) {
  //   return
  // }
  // console.log(home?.services);

  return (
    <>
      <Jumbotron
        title={home?.jumbotron[0].fields.title}
        desc={home?.jumbotron[0].fields.description}
        images={home?.jumbotron[0].fields.image}
      />
      <Overview overview={home?.overview[0]} />
      <Projects projects={home?.projects} />
      <Services services={home?.services} button={true} />
    </>
  );
}
