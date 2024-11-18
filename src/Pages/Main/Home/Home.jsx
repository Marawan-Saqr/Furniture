import HomeCover from './Home-cover/HomeCover';
import ProductSection from '../../../Shared/Product-section/ProductSection';
import WhyChooseUs from '../../../Shared/Why-choose-us/WhyChooseUs';
import InteriorDesign from './Interior-Design/InteriorDesign';
import Testimonials from '../../../Shared/Testimonials/Testimonials';
import RecentBlog from '../../../Shared/Recent-blog/RecentBlog';
import Subscribe from '../../../Shared/Subscribe/Subscribe';

const Home = () => {
  return (
    <div>
      <HomeCover />
      <ProductSection />
      <WhyChooseUs />
      <InteriorDesign />
      <Testimonials />
      <RecentBlog />
      <Subscribe />
    </div>
  )
}
export default Home;