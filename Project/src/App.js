import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Pages/Main/Main';
import Home from "./Pages/Main/Home/Home";
import Shop from './Pages/Main/Shop/Shop';
import ShopProducts from './Shared/Shop-products/ShopProducts';
import ProductDetails from './Pages/Main/Shop/Product-details/ProductDetails';
import AboutUs from './Pages/Main/About-us/AboutUs';
import PersonDetails from './Pages/Main/About-us/Person-details/PersonDetails';
import Services from './Pages/Main/Services/Services';
import Blog from './Pages/Main/Blog/Blog';
import Dashboard from './Pages/Dashboard/Dashboard';
import DefaultDashboard from './Pages/Dashboard/Default/Default';
import AddProducts from './Pages/Dashboard/Add-products/AddProducts';
import NotFound from './Pages/Main/Not-found/NotFound';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Main layout routes */}
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/product-details/:productID" element={<ProductDetails />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="about/person-details/:personID" element={<PersonDetails />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
          </Route>
          
          {/* Dashboard routes */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<DefaultDashboard />} />
            <Route path="dashboard-home" element={<DefaultDashboard />} />
            <Route path="all-products" element={<ShopProducts />} />
            <Route path="add-products" element={<AddProducts />} />
          </Route>
          
          {/* 404 Not Found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
