import React from 'react';
import './Search.css'

const Search = () => {
    return (
        <div className="search">
            <div className="search__make">
                <input type="search" placeholder="search car by make..." />
                <i class="fas fa-search"></i>
            </div>
            <div className="search__model">
                <input type="search" placeholder="search car by model..." />
                <i class="fas fa-search"></i>
            </div>
            <div className="search__price">
                <input type="search" placeholder="search car by price..." />
                <i class="fas fa-search"></i>
            </div>
        </div>
    )
}

export default Search
