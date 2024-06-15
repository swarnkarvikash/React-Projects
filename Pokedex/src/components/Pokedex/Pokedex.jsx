import Pokemonlist from "../PokemonList/Pokemonlist";
import Search from "../Search/Search";
import './Pokedex.css';

function Pokedex() {
    return(
        <div className="pokedex-wrapper">
       
        <Search />
        <Pokemonlist />
        </div>
    )
}

export default Pokedex;