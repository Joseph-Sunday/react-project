import { CartBtn, ShoppingBag, SearchBtn, Prev, Next } from '../../assets/vectors/';
import {FaSearch} from 'react-icons/fa'; 

function Header() {
	return(
		<header>
			<div className='productDetail-head'>
				<div className='BP-productDetail'>
					<p>BP</p>
				</div>
				<div>
					<h1>Bambam's Perfume Store</h1>
				</div>
				<div>
					<FaSearch />
				</div>
			</div>
		</header>
	)
}

export default Header 