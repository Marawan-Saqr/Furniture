import "./ProductSection.css";
import SpinnerLoading from "../Spinner/Spinner";
import productChair from "./product-chair.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ButtonDetails from '../../Shared/Styled-components/StyledComponents';

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllProducts = async () => {
    await axios.get("http://localhost:3001/chairsProducts").then((response) => setProducts(response.data));
    setLoading(false);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section className="product-section pt-5 pb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-3">
            <div className="content">
              <h2>Crafted with excellent <span style={{ color: "#f9bf29" }}>material</span>
              </h2>
              <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <Link to={"/services"}>
                <button>Explore</button>
              </Link>
            </div>
          </div>
          {loading ? (
            <div className="col-md-9 d-flex justify-content-center align-items-center">
              <SpinnerLoading />
            </div>
          ) : (
            products.slice(0, 3).map((product) => (
              <div className="col-md-6 col-lg-3" key={product.id}>
                <div className="box text-center">
                  <img src={productChair} alt={product.title} className="img-fluid" />
                  <h4>{product.title}</h4>
                  <h5>{product.salary}$</h5>
                  <Link to={`/shop/product-details/${product.id}`}>
                    <ButtonDetails>Show Details</ButtonDetails>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
