import Header from '../../components/product/Header';
import Main from '../../components/shopping-cart/Main'
import Footer from '../../components/product/Footer'; 
import '../../css/shopping-cart.css';

function Index({cartItems, handleAddToCart, handleRemoveProduct, handleDeleteProduct}) {
	return (
		<div>
			<Header />
			<Main cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveProduct={handleRemoveProduct} handleDeleteProduct={handleDeleteProduct} />
			<Footer />
		</div>
	)
}

export default Index