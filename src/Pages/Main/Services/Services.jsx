import ServicesCover from './Services-cover/ServicesCover';
import ServicesIcon from './Services-icons/ServicesIcon';
import ProductSection from '../../../Shared/Product-section/ProductSection';
import Testimonials from '../../../Shared/Testimonials/Testimonials';
import Subscribe from '../../../Shared/Subscribe/Subscribe';

const Services = () => {
  return (
    <div>
      <ServicesCover />
      <ServicesIcon />
      <ProductSection />
      <Testimonials />
      <Subscribe />
    </div>
  )
}
export default Services;