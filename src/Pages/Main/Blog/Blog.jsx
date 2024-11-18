import BlogCover from './Blog-cover/BlogCover';
import RecentBlog from '../../../Shared/Recent-blog/RecentBlog';
import Testimonials from '../../../Shared/Testimonials/Testimonials';
import Subscribe from '../../../Shared/Subscribe/Subscribe';

const Blog = () => {
  return (
    <div>
      <BlogCover />
      <RecentBlog />
      <Testimonials />
      <Subscribe />
    </div>
  )
}
export default Blog;