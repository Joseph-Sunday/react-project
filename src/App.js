import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import './App.css';
import StorePage from './pages/Store';
import ProductPage from './pages/product';
import ShoppingCartPage from './pages/shopping-cart'; 
function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id); 
    if(ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        {...ProductExist, quantity : ProductExist.quantity + 1} : item)
      )
    } else {
      setCartItems([...cartItems, {...product, quantity : 1 }]); 
    }
  }; 
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id); 
    if(ProductExist.quantity > 1) {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1 } : item)
      )
    }
  };

  const handleDeleteProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id); 
    if(ProductExist) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  }


  return <BrowserRouter>
    <Routes>
        <Route path='/' element={<StorePage handleAddToCart={handleAddToCart} />} />
        <Route path='product-detail' element={<ProductPage handleAddToCart={handleAddToCart} />} />
        <Route path='shopping-cart' element={<ShoppingCartPage cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveProduct={handleRemoveProduct} handleDeleteProduct={handleDeleteProduct} />} />
    </Routes>
  </BrowserRouter>
}

export default App;
