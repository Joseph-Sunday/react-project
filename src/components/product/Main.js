import React, {useEffect, useState} from 'react'; 
import { Link, useParams } from 'react-router-dom';
import productBigImg from '../../images/Onboarding/product-big-image.png';
import productImg from '../../images/Onboarding/product.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import {GrPrevious, GrNext} from 'react-icons/gr';
import data from '../store/data/data';

function Main({handleAddToCart}) {
	const [count, setCount] = useState(1);

	const { productId } = useParams();

	const handleDecrement = () => {
		setCount(prevCount =>prevCount===1?prevCount:prevCount - 1)
	};

	const handleIncrement = () => {
		setCount(prevCount => prevCount + 1)
	};

	const products = [
		{
			id: 1, 
			title: 'Bleu Perfume',
			price: 'NGN10,000',
			img: '../pics/product.png'
		},
		{
			id: 2, 
			title: 'Bleu Perfume',
			price: 'NGN10,000',
			img: '../pics/productImg-4.jpg'
		},
		{
			id: 3, 
			title: 'Bleu Perfume',
			price: 'NGN10,000',
			img: '../pics/productImg-5.jpg'
		},
		{
			id: 4, 
			title: 'Bleu Perfume',
			price: 'NGN10,000', 
			img: '../pics/product.png'
		},
		{
			id: 5, 
			title: 'Bleu Perfume',
			price: 'NGN10,000',
			img: '../pics/productImg-4.jpg'
		},
		{
			id: 6, 
			title: 'Bleu Perfume',
			price: 'NGN10,000', 
			img: '../pics/productImg-5.jpg'
		},
		{
			id: 7, 
			title: 'Bleu Perfume',
			price: 'NGN10,000',
			img: '../pics/product.png'
		},
		{
			id: 8, 
			title: 'Bleu Perfume',
			price: 'NGN10,000', 
			img: '../pics/productImg-4.jpg'
		}, 
		{
			id: 9, 
			title: 'Bleu Perfume',
			price: 'NGN10,000', 
			img: '../pics/productImg-5.jpg'
		},
		{
			id: 10, 
			title: 'Bleu Perfume',
			price: 'NGN10,000', 
			img: '../pics/product.png'
		},
		{
			id: 11, 
			title: 'Bleu Perfume',
			price: 'NGN10,000', 
			img: '../pics/productImg-4.jpg'
		},
		{
			id: 12, 
			title: 'Bleu Perfume',
			price: 'NGN10,000', 
			img: '../pics/productImg-5.jpg'
		}
	]

	const product = products.find((product) => product.id === parseInt(productId)); 

	if(!product) {
		return <div className='productDetail-container'>Loading...</div>
		console.log(product)
	} else {
		return (
			<section>
				<div className='back-to-catalog'>
					<div>
						<p><GrPrevious /> Back to Catalog</p>
					</div>
					<div>
						<p><GrPrevious /> Prev  Next <GrNext /></p> 
					</div>
				</div>
				<div>
					<div className='productDetail-container'>
						<div className="product-images">
							<img src={product.img} alt='Bleu Perfume' className='productDetail-big-image' />
							<div className='other-product-image'>
								<img src={product.img} alt='Bleu Perfume' />
								<img src={product.img} alt='Bleu Perfume' />
								<img src={product.img} alt='Bleu Perfume' />
							</div>
						</div>
						<div>
							<div className='productTitle-and-price'>
								<p>Bleu Perfume</p>
								<h2>NGN8,500</h2>
							</div>
							<div className='productDetail-quantity'>
								<p>Quantity</p>
								<span>
									<button onClick={handleDecrement}>-</button>
									<button>{count}</button>
									<button onClick={handleIncrement}>+</button>
								</span>
							</div>
							<div className='add-to-cart-region'>
								<Link to='/shopping-cart'>
									<button onClick={() => handleAddToCart(product)}>Add to cart</button>
								</Link>
								<p>Share this product with friends:</p>
								<FaFacebook className='fa-social facebook'/>
								<FaInstagram className='fa-social instagram'/>
								<BsWhatsapp className='fa-social whatsapp'/>
							</div>
							<div className='productDetail-description'>
								<h3>Product Details</h3>
								<p>
									Add variations of your products that customers can choose <br /> 
									from. Common variants include license options, colors, sizes, and more. 
									Add variations of your products that customers can choose <br /> from. 
									Common variants include license options, colors, sizes, <br /> and more. 
									Add variations of your products that customers can choose from.
									Common variants include license options, <br /> colors, sizes, and more. 
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)	
	}

	
}

export default Main