
const Search = ({searchTerm, setSearchTerm}) => {

	function handleSearch(event) {
		setSearchTerm(event.target.value)
	}

	return (
		<div className="search">
			<div>
				<img src="/search.svg" alt="search icon"></img>

				<input type="text" placeholder="Search through thousands of movies" value={searchTerm} onChange={handleSearch}/>
			</div>
		</div>
	)
}

export default Search