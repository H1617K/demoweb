import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product/product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/Product' element={<Product/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
