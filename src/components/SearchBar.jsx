const SearchBar = ({onChangeText}) => {

  return (
      <>
        <form>
          <label htmlFor="" id="searchbar-msj"> ¡Busca tu sabor favorito! </label>
          <input 
              onChange={onChangeText}
              type="search" 
              name="search"
              id="search"
              placeholder="Buscar.."
            />
        </form>
      </>
  );
};

export default SearchBar;