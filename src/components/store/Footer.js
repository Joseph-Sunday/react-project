import { FaPlus, FaMinus, FaFacebook, FaInstagram } from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';

function Footer() {
	return (
		<footer className='container'>

			<div className='top'>
				<div className='top-left'>
					<p>About</p>
					<p>Contact</p>
				</div>
				<div className='top-left'>
					<div>
						<FaFacebook  className='fa fa-facebook' />
						<FaInstagram className='fa fa-instagram' />
						<BsWhatsapp className='fa fa-whatsapp' />
					</div>
				</div>
			</div>

			<div className='space-btwn margin-top margin-bottom'>
				<div className='bottom'>
					<p>All right reserved</p>
				</div>
				<div className='bottom'>
					<p>Powered By Peppa</p>
				</div>
			</div>

		</footer>
	)
}

export default Footer