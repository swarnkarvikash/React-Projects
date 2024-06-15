import './Search.css';

function Search() {
    return(
        <div className='Search-wrapper'>
        <input
        type="text"
        placeholder="pokemon name...."
        id="pokemon-name-search"
        />
        </div>
    )
}

export default Search;