import React from 'react'
import '../../styles/Header.css'

// Assets


const Search = (props) => {


    return (
        <div className="search-container">
            <form className="search" onSubmit={props.handleSearch}>
                <input
                    autoComplete="off"
                    placeholder="Search"
                    name="keyword"
                    value={props.keyword}
                    onChange={props.handleChange}
                />
            </form>
        </div>
    )
}

export default Search