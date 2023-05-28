import './App.css';
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import {BrowserRouter as Router,Routes, Route,Navigate} from "react-router-dom"
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from './component/Admin/NewProduct';
import UpdateProduct from './component/Admin/UpdateProduct';
import OrderList from './component/Admin/OrderList';
import ProcessOrder from './component/Admin/ProcessOrder';
import UsersList from './component/Admin/UsersList';
import UpdateUser from './component/Admin/UpdateUser';
import ProductReviews from './component/Admin/ProductReviews';
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";



function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");  

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);


  return (
   
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
        <Routes>
        <Route path="/process/payment" element= {isAuthenticated?<Payment/> :<Navigate to="/login" />} />
        </Routes>
      </Elements>
      )}      
      
      <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/product/:id" element={<ProductDetails/>} />
      <Route  path="/products" element={<Products/>} />

      <Route  path="/products/:keyword" element={<Products/>} />

      <Route  path="/search" element={<Search/>} />

      <Route  path="/about" element={<About/>} />

      <Route  path="/contact" element={<Contact/>} />

      {/* <ProtectedRoute  path="/account" element={<Profile/>} /> */}

      {/* <Route  path="/account" element={ <ProtectedRoute><Profile/></ProtectedRoute> } /> */}

      {/* <Route element={<ProtectedRoute/>}>
      <Route  path="/account" element={<Profile/>} />

      </Route> */}

      {/* <Route path="/account" element= {isAuthenticated?<Profile/> :<LoginSignUp/>} /> */}

      <Route path="/account" element= {isAuthenticated?<Profile/> :<Navigate to="/login" />} />

      <Route path="/me/update" element= {isAuthenticated?<UpdateProfile/> :<Navigate to="/login" />} />

      <Route path="/password/update" element= {isAuthenticated?<UpdatePassword/> :<Navigate to="/login" />} />

      {/* <Route path="/password/forgot" element= {isAuthenticated?<ForgotPassword/> :<Navigate to="/login" />} /> */}

      <Route  path="/password/forgot" element={<ForgotPassword/>} />

      <Route  path="/password/reset/:token" element={<ResetPassword/>} />

      <Route  path="/login" element={<LoginSignUp/>} />

      <Route  path="/cart" element={<Cart/>} />

      <Route path="/shipping" element= {isAuthenticated?<Shipping/> :<Navigate to="/login" />} />

      <Route path="/order/confirm" element= {isAuthenticated?<ConfirmOrder/> :<Navigate to="/login" />} />

      <Route path="/success" element= {isAuthenticated?<OrderSuccess/> :<Navigate to="/login" />} />

      <Route path="/orders" element= {isAuthenticated?<MyOrders/> :<Navigate to="/login" />} />

      <Route path="/order/:id" element= {isAuthenticated?<OrderDetails/> :<Navigate to="/login" />} />

      <Route  path="/admin/dashboard" element= {isAuthenticated?<Dashboard/> :<Navigate to="/login" />} />


      <Route  path="/admin/products" element= {isAuthenticated?<ProductList/> :<Navigate to="/login" />} />

      <Route  path="/admin/product" element= {isAuthenticated?<NewProduct/> :<Navigate to="/login" />} />

      <Route  path="/admin/product/:id" element= {isAuthenticated?<UpdateProduct/> :<Navigate to="/login" />} />

      <Route  path="/admin/orders" element= {isAuthenticated?<OrderList/> :<Navigate to="/login" />} />

      <Route  path="/admin/order/:id" element= {isAuthenticated?<ProcessOrder/> :<Navigate to="/login" />} />

      <Route  path="/admin/users" element= {isAuthenticated?<UsersList/> :<Navigate to="/login" />} />

      <Route  path="/admin/user/:id" element= {isAuthenticated?<UpdateUser/> :<Navigate to="/login" />} />

      <Route  path="/admin/reviews" element= {isAuthenticated?<ProductReviews/> :<Navigate to="/login" />} />
      

      

      

      
      </Routes>

      <Footer />
      
    </Router>

  );
}

export default App;
