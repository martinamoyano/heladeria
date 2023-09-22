import './SearchBar.css';

const SearchBar = ({onChangeText}) => {

  return (
      <>
        <form className="search-bar-container">
          <label htmlFor="" id="searchbar-msj"> ¡Busca tu sabor favorito! </label>
          <input 
              onChange={onChangeText}
              type="search" 
              name="search"
              id="search"
              placeholder="Buscar..."
              className="search-input"
            />
        </form>
      </>
  );
};

export default SearchBar;