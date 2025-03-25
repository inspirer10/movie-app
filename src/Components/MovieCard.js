import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

function MovieCard({ title, rating, poster, release_date, original_language }) {
    return (
        <div className='movie_card'>
            <Image
                src={
                    poster
                        ? `https://image.tmdb.org/t/p/w500${poster}`
                        : `/no-movie.png`
                }
                alt={`${title} poster`}
                height={500}
                width={500}
            />
            <h3>{title}</h3>
            <div className='movie_info'>
                <FaStar className='star_icon' />
                <p>{rating ? rating.toFixed(1) : 'N/A'}</p>
                <span>&#183;</span>
                <p className='lang'>{original_language}</p>
                <span>&#183;</span>
                <p className='date'>
                    {release_date ? release_date.split('-')[0] : 'N/A'}
                </p>
            </div>
        </div>
    );
}

export default MovieCard;
