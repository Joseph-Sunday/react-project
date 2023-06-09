import React, {useState} from 'react';
import {GrNext} from 'react-icons/gr';
import {RxCross2} from 'react-icons/rx'
import productImg from '../../images/Onboarding/product.png';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Main() {
	const [count, setCount] = useState(1);

	const handleDecrement = () => {
		setCount(prevCount => prevCount === 1 ? prevCount : prevCount - 1)
	}

	const handleIncrement = () => {
		setCount(prevCount => prevCount + 1)
	}

	const products = [
		{
			id: 1, 
			title: "Bleu Perfume", 
			price: "NGN8,500"
		},
		{
			id: 1, 
			title: "Bleu Perfume", 
			price: "NGN8,500"
		},
		{
			id: 1, 
			title: "Bleu Perfume", 
			price: "NGN8,500"
		}
	]

	return (
		<section>
			<div className='cart-heading'>
				<p>Store <GrNext className='next'/> Shopping Cart</p>
				<div>
					<h2>Shopping cart</h2>
					<h2 className="cart-summary-title-1">Cart Summary</h2>
				</div>
			</div>
			<div className='cart'>
				<div className='shopping-cart'>
					{
						products.map((product) => (
							<div className='cart-product'>
								<div>
									<img src={productImg} alt="product image"/>
								</div>
								<div className='product-right-section'>
									<div className='top'>
										<p>{product.title}</p>
										<span><RxCross2 className='cancel' /></span>
									</div>
									<div className='bottom'>
										<div>
											<button onClick={handleDecrement}><FaMinus /></button>
											<button>{count}</button>
											<button onClick={handleIncrement}><FaPlus /></button>
										</div>
										<h3>{product.price}</h3>
									</div>
								</div>
							</div>
						))
					}
				</div>
				<div>
					<h2 className="cart-summary-title-2">Cart Summary</h2>
					<div className='cart-summary'>
						<div>
							<p>3 Items</p>
						</div>
						<div>
							<p>Escrow Fee</p>
							<p>NGN1,200</p>
						</div>
						<div>
							<p>Subtotal</p>
							<p>NGN27,000</p>
						</div>
						<span className='center'>
							<button>Proceed to Checkout</button>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Main