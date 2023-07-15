import Header from '../../components/product/Header';
import Main from '../../components/product/Main';
import Footer from '../../components/product/Footer'; 
import '../../css/productDetails.css'; 

function index({handleAddToCart}) {
	return (
		<div>
			<Header />
			<Main handleAddToCart={handleAddToCart} />
			<Footer />
		</div>
	)
}

export default index