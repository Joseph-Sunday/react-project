import { CartBtn, ShoppingBag, SearchBtn, Prev, Next } from '../../assets/vectors/';
import {FaSearch} from 'react-icons/fa';
import {GrPrevious, GrNext} from 'react-icons/gr'; 

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

			<div className='back-to-catalog'>
				<div>
					<p><GrPrevious /> Back to Catalog</p>
				</div>
				<div>
					<p><GrPrevious /> Prev  Next <GrNext /></p> 
				</div>
			</div>
		</header>
	)
}

export default Header 