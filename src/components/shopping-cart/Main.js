import {GrNext} from 'react-icons/gr';
import {RxCross2} from 'react-icons/rx'
import { FaPlus, FaMinus } from 'react-icons/fa';

function Main({cartItems, handleAddToCart, handleRemoveProduct, handleDeleteProduct}) {
	let totalPrice = 0; 
	cartItems.forEach(item => {
		const subtotal = item.price * item.quantity;
		totalPrice = subtotal + 1200;
		console.log(totalPrice)  
	})

	return (
		<section>
			{cartItems.length === 0 && (
				<div className='cart-empty'>Cart is Empty</div>
			)}
			{cartItems.length > 0 && (
				<div className='cart-heading'>
					<p>Store <GrNext className='next'/> Shopping Cart</p>
					<div>
						<h2>Shopping cart</h2>
						<h2 className="cart-summary-title-1">Cart Summary</h2>
					</div>
				</div>
			)}
	
			<div className='cart'>
				<div className='shopping-cart'>
					{
						cartItems.map((item) => (
							<div className='cart-product'>
								<div>
									<img src={item.img} alt="product image"/>
								</div>
								<div className='product-right-section'>
									<div className='top'>
										<p>{item.title}</p>
										<span onClick={() => handleDeleteProduct(item)}><RxCross2 className='cancel' /></span>
									</div>
									<div className='bottom'>
										<div>
											<button onClick={() => handleRemoveProduct(item)}><FaMinus /></button>
											<button>{item.quantity}</button>
											<button onClick={() => handleAddToCart(item)}><FaPlus /></button>
										</div>
										<h3>{item.price}</h3>
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
							<p>{cartItems.length} Items</p>
						</div>
						<div>
							<p>Escrow Fee</p>
							<p>NGN1,200</p>
						</div>
						<div>
							<p>Subtotal</p>
							<p>NGN{totalPrice}</p>
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