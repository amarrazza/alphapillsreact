import React, {useState} from "react";

const SearchBar = props => {
    const [term, setTerm] = useState('');
    const { searching } = props;

    const handleTextInput = e => {
        setTerm(e.target.value.toLowerCase())
    }

    const handleSearch = e => {
        e.preventDefault()
        searching()

    }

    return(
        <div className="searchContainer" onSubmit={handleSearch}>
            <form className="searchForm" >
                <input placeholder="Search..." onChange={handleTextInput}
                 name='searchInput' value={term} />
                 <button>🔎</button>
            </form>
        </div>
    )
}

export default SearchBar;