import productBigImg from '../../images/Onboarding/product-big-image.png';
import productImg from '../../images/Onboarding/product.png';
import { Plus, Minus, Facebook } from '../../assets/vectors';
import { FaPlus, FaMinus, FaFacebook, FaInstagram } from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import {GrPrevious, GrNext} from 'react-icons/gr';

function Main() {
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
			<div className='productDetail-container'>
				<img src={productBigImg} alt='Bleu Perfume' className='productDetail-big-image' />
				<div>
					<div className='productTitle-and-price'>
						<p>Bleu Perfume</p>
						<h2>NGN8,500</h2>
					</div>
					<div className='productDetail-quantity'>
						<p>Quantity</p>
						<span>
							<button>-<Minus /></button>
							<button>1</button>
							<button>+</button>
						</span>
					</div>
					<div className='add-to-cart-region'>
						<button>Add to cart</button>
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
			<div className='other-product-image'>
				<img src={productImg} alt='Bleu Perfume' />
				<img src={productImg} alt='Bleu Perfume' />
				<img src={productImg} alt='Bleu Perfume' />
			</div>
		</section>
	)
}

export default Main