import StoreHeader from '../../components/store/StoreHeader';
import SearchBar from '../../components/store/SearchBar';
import Products from '../../components/store/Products';
import Footer from '../../components/store/Footer';
import '../../css/store.css'

function index({handleAddToCart}) {
	return(
		<div>
			<StoreHeader />
			<SearchBar />
			<Products handleAddToCart={handleAddToCart} />
			<Footer />
		</div>	
	)
}

export default index