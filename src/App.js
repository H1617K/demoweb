import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product/product';
import Navbar from './Navbar/Navbar';
import Cart from './Cart/cart'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
