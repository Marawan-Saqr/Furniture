import productChair from './product-chair.png';
import SpinnerLoading from '../../Shared/Spinner/Spinner';
import './ShopProducts.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ButtonDetails from '../../Shared/Styled-components/StyledComponents';

const ShopProducts = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllProducts = async () => {
    await axios.get("https://veil-flicker-piano.glitch.me/chairsProducts").then((response) => setProducts(response.data));
    setLoading(false);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="shop-products text-center pt-5 pb-5">
      <h2>Shop <span>Products</span></h2>
      <div className="container">
        {loading ? (
          <SpinnerLoading />
        ) : (
          <div className="row">
            {products.map((product) => (
              <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
                <div className="box">
                  <img src={productChair} alt="chair" className='img-fluid' />
                  <h4>{product.title}</h4>
                  <h4>{product.salary}$</h4>
                  <p>{product.description}</p>
                  <Link to={`/shop/product-details/${product.id}`}>
                    <ButtonDetails>Show Details</ButtonDetails>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopProducts;
