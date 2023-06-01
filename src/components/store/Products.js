import {ArrowDown, CartBtn} from '../../assets/vectors'; 
import productImg from '../../images/Onboarding/product.png';

function Products() {
	const products = [
		{
			id: 1, 
			title: 'Bleu Perfume', 
			price: 'NGN10,000',
		},
		{
			id: 2, 
			title: 'Bleu Perfume', 
			price: 'NGN10,000'
		},
		{
			id: 3, 
			title: 'Bleu Perfume', 
			price: 'NGN10,000'
		},
		{
			id: 4, 
			title: 'Bleu Perfume', 
			price: 'NGN10,000'
		},
		{
			id: 5, 
			title: 'Bleu Perfume', 
			price: 'NGN10,000'
		},
		{
			id: 6, 
			title: 'Bleu Perfume', 
			price: 'NGN10,000'
		},
		{
			id: 7, 
			title: 'Bleu Perfume', 
			price: 'NGN10,000'
		},
		{
			id: 8, 
			title: 'Bleu Perfume', 
			price: 'NGN10,000'
		}, 
		{
			id: 9, 
			title: 'Bleu Perfume', 
			price: 'NGN10,000'
		},
		{
			id: 10, 
			title: 'Bleu Perfume', 
			price: 'NGN10,000'
		},
		{
			id: 11, 
			title: 'Bleu Perfume', 
			price: 'NGN10,000'
		},
		{
			id: 12, 
			title: 'Bleu Perfume', 
			price: 'NGN10,000'
		},
	]
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
							<img src={productImg} alt='product image' />
							<p>{product.title}</p>
							<h3>{product.price}</h3>
						</div>
					))
				}
			</div>

			<div className='add-to-cart'>
				<h5>Add to Cart</h5>
			</div>

		</section>
	)
}

export default Products