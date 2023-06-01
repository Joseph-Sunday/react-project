import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import './App.css';
import StorePage from './pages/Store';
import ProductPage from './pages/product';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<StorePage />} />
      <Route path='product-detail' element={<ProductPage />} />
    </Routes>
  </BrowserRouter>
}

export default App;
