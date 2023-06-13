import React, {Link} from 'react-router-dom';
import headerImg from '../../images/Onboarding/header.png'; 
import {CartBtn,ShoppingBag} from '../../assets/vectors'; 

function StoreHeader() {
	return (
		<div>
			<header>
				<div>
					<img src={headerImg} alt="Store Header Image" />
				</div>

				<div className='BP'>
					<h5>BP</h5>
				</div>

				<div className='container'>
					<div className='store-name'>
						<div>
							<h2>Bambam's Perfume Store</h2>
							<Link to='/shopping-cart' className='cart-link'>
								<div className="cartBtn"><ShoppingBag/></div>
							</Link>
						</div>
					</div>

					<div className='store-desc'>
						<p>
							Welcome to my store, I sell bespoke perfumes at affordable prices. <br />
							Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales tempus et tortor risus dignissim tellus. <br/ >
							Magna lobortis sapien sit est quis sollicitudin.
						</p>
					</div>
				</div>

			</header>
		</div>
	)
}

export default StoreHeader