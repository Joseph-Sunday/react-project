import {ShoppingBag, Profile, ArrowDown} from '../../assets/vectors'; 
import {RiCopyrightLine} from 'react-icons/ri';
import {VscAccount} from 'react-icons/vsc';

function Footer() {
	return(
		<footer className='productDetail-footer'>
			<div className='productDetail-footer-top-section'>
				<div>
					<VscAccount className='account-icon' />
					<ShoppingBag color="black" />
				</div>
				<div>
					<p>My Account</p>
					<p>Shopping Bag</p>
				</div>
			</div>
			<div className='productDetail-footer-bottom-section'>
				<p>Copyright <RiCopyrightLine /> 2023 peppa.io</p>
				<p>Privacy Policy.Terms of Service</p>
			</div>
		</footer>
	)
}

export default Footer