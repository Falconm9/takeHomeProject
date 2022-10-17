import React, {useState} from "react";
import { strings } from "../../res/strings";

const SearchTextField = ({defaultValue, handleSearch}) => {
  const [searchValue, setSearchValue] = useState(defaultValue)

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchValue);
  }
  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        data-testid="searchInput"
        placeholder={strings.searchPlaceholder}
        onChange={evt => setSearchValue(evt.target.value.toLocaleLowerCase())}
        style={searchStyle.input}
      />
      <button 
        type="submit" 
        style={searchStyle.icon}
        data-testid="searchButton"
      >
        <i className="fa fa-search"></i>
      </button>
    </form>
  )
}

const searchStyle= {
  input: {
    width: '220px',
    fontSize: '15px',
    padding: '5px'
  },
  icon: {
    fontSize: '18px',
    padding: '3px',
    width: '50px'
  }
}

export default SearchTextField;