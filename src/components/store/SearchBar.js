import {FaSearch} from 'react-icons/fa';

function SearchBar() {
	return(
		<section className='container'>
			<div className='search-bar'>
				<FaSearch className='fa-search'/>
				<div className='center'>
					<input type="text" placeholder="Search for Products" />
				</div>

				<div>
					<button className='search-btn'>Search</button>
				</div>
			</div>
		</section>
	)
}

export default SearchBar