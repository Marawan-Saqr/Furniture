import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SpinnerLoading from '../../../../Shared/Spinner/Spinner';
import productImage from './product-chair.png';

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`https://veil-flicker-piano.glitch.me/chairsProducts/${params.productID}`);
      setProductDetails(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.productID) {
      getProductDetails();
    }
  }, [params]);

  return (
    <div className="product-details-container">
      {loading ? (
        <div className="loading-container">
          <SpinnerLoading />
        </div>
      ) : (
        productDetails && (
          <div className="container">
            <div className="row align-items-center">
              <div className='col-md-6 p-3'>
                <img src={productImage} alt={productDetails.title} className="img-fluid" />
              </div>
              <div className='col-md-6 p-3'>
                <h2>{productDetails.title}</h2>
                <h4>{productDetails.salary}.00$</h4>
                <p>{productDetails.description}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductDetails;
