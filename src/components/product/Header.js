import {Link} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa'; 

function Header() {
	return(
		<header>
			<div className='productDetail-head'>
				<Link to='/' className='BP-productDetail'>
					<p>BP</p>
				</Link>
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