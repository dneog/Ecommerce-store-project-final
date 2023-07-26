
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ProductPage from './pages/product/ProductPage';
import Cart from './pages/Cart/Cart';
import ProductDetails from './pages/productDetails/ProductDetails';
import Checkout from './pages/Checkout/Checkout';
import OrderSuccess from './pages/Order-success/OrderSuccess';
import OrderHistory from './pages/Order-history/OrderHistory';
import OrderDetails from './pages/orderDetails/OrderDetails';
import Contact from './pages/contactus/Contact';

function App() {
  return (
    <div className="App">
    <ToastContainer />
    <Header />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<Checkout />} />
        <Route path='/order-history' element={<OrderHistory />} />
        <Route path='/order-success' element={<OrderSuccess />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/order-details/:id' element={<OrderDetails />} />
      </Routes>
     <Footer /> 
    </div>
  );
}

export default App;
