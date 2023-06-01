import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import './App.css';
import StorePage from './pages/Store';
import ProductPage from './pages/product';
import ShoppingCartPage from './pages/shopping-cart'; 

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<StorePage />} />
      <Route path='product-detail' element={<ProductPage />} />
      <Route path='shopping-cart' element={<ShoppingCartPage />} />
    </Routes>
  </BrowserRouter>
}

export default App;
