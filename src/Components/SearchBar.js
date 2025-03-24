import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ searchItem, setSearchItem }) {
    return (
        <div className='search'>
            <FaSearch className='search_icon' />
            <input
                type='text'
                placeholder='Search through thousands of movies'
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
