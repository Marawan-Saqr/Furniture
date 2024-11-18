import "./RecentBlog.css";
import SpinnerLoading from '../Spinner/Spinner';
import blogImage from "./post.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ButtonDetails from '../../Shared/Styled-components/StyledComponents';

const RecentBlog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllBlogs = async () => {
    await axios.get("https://veil-flicker-piano.glitch.me/blogs").then((response) => setBlog(response.data));
    setLoading(false);
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="recent-blog pt-5 pb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="left">
              <h2>Recent <span style={{color: '#f9bf29'}}>Blog</span></h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right text-end">
              <Link to={"/blog"}>
                <ButtonDetails>View All Posts</ButtonDetails>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {loading ? (
            <div className="col-12 text-center">
              <SpinnerLoading />
            </div>
          ) : (
            blog.map((post) => (
              <div className="col-md-6 col-lg-4" key={post.id}>
                <div className="box">
                  <img src={blogImage} alt="image-blog" className="img-fluid" />
                  <div className="text">
                    <h5>{post.title}</h5>
                    <h6>{post.author}</h6>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
