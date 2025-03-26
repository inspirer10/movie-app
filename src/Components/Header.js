import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import { useDebounce } from 'react-use';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    },
};

function Header() {
    const [searchItem, setSearchItem] = useState('');
    const [moviesList, setMoviesList] = useState([]);
    const [debouncedSearchItem, setDebouncedSearchItem] = useState('');

    useDebounce(() => setDebouncedSearchItem(searchItem), 500, [searchItem]);

    const fetchMovies = async (query = '') => {
        try {
            const endpoint = query
                ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(
                      query
                  )}`
                : `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
            const response = await fetch(endpoint, API_OPTIONS);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            setMoviesList(data.results);
            console.log(data.results);
        } catch (err) {
            console.error(`Error: ${err}`);
        }
    };

    useEffect(() => {
        fetchMovies(debouncedSearchItem);
    }, [debouncedSearchItem]);

    return (
        <header>
            <Image
                src={'/hero-img.png'}
                height={500}
                width={500}
                alt='Posters of movies'
            />
            <h1>
                Find <span>Movies</span> You'll Enjoy <br /> Without the Hassle
            </h1>
            <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} />
            <section className='movies_section'>
                {moviesList.map(
                    ({
                        id,
                        title,
                        vote_average,
                        poster_path,
                        release_date,
                        original_language,
                    }) => (
                        <MovieCard
                            key={id + title}
                            title={title}
                            rating={vote_average}
                            poster={poster_path}
                            release_date={release_date}
                            original_language={original_language}
                        />
                    )
                )}
            </section>
        </header>
    );
}

export default Header;
