import Services from '@/components/Services';
import { getServices } from '@/libs/contentful';

const ServicesPage = async () => {

  const data = await getServices();

  return (
    <>
      <Services services={data} button={false}/>
    </>
  )
}

export default ServicesPage