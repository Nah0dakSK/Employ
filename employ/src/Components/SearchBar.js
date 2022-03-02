import React from "react";
import SearchIcon from '@material-ui/icons/Search';

function SearchBar({data}) {
    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder="choose a job" />
                <div className="searchIcon">
                    <SearchIcon />
                </div>
            </div>
            <div className="dataResult"></div>
        </div>
    )
}

export default SearchBar;