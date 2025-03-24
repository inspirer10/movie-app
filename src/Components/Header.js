import Image from 'next/image';
import React, { useState } from 'react';
import SearchBar from './SearchBar';

function Header() {
    const [searchItem, setSearchItem] = useState('');

    return (
        <header>
            <Image src={'/hero-img.png'} height={500} width={500} />
            <h1>
                Find <span>Movies</span> You'll Enjoy <br /> Without the Hassle
            </h1>
            <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} />
        </header>
    );
}

export default Header;
