import React, {useState} from 'react' 
import {Link} from 'react-router-dom'
import {ArrowDown} from '../../assets/vectors'; 
import productImg from '../../images/Onboarding/product.png';
import data from './data/data';

function Products({handleAddToCart}) {
	const [cart, setCart] = useState([]);

	const {products} = data;

	return (
		<section className='container'>

			<div className='explore-prod'>
				<h1>Explore Products</h1>
				<p>Featured <span><ArrowDown/></span></p>
			</div>

				<div className='products'>
					{
						products.map((product) => (
							<div className='product' key={product.id}>
								<Link to={`product-detail/${product.id}`} className='product-link'>
									<img src={product.img} alt='product image' className="store-productImg"/>
									<p>{product.title}</p>
									<h3>{product.price}</h3>
								</Link>
								<Link to='/shopping-cart'>
									<div className='add-to-cart'>
										<button onClick={()=> handleAddToCart(product)}>Add to Cart</button>
									</div>
								</Link>
							</div> 
						))
					}
				</div> 

		</section>
	)
}

export default Products