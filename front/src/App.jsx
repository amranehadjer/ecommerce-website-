
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import Product  from './components/Product';
import Contact from './components/Contact';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Card from './components/Card';
import Footer from './components/Footer';
import{ CartProvider} from './CartContext';

function App() {
  return (
    <div className="App">
    <CartProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/cart' element={<Card></Card>}></Route>

        </Routes>
        <Footer></Footer>

      </Router>
    </CartProvider>
      {/* <Nav></Nav> 
      <Home></Home> */}
     



    </div>
  );
}

export default App;
