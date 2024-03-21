import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product/product';
import Navbar from './Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Product' element={<Product/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
