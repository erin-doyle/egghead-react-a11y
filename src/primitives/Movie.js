import React from 'react';
import PropTypes from 'prop-types';


const Movie = ({ movieId, movie }) => {
    const { name, year, description, director, stars, rating, runtime } = movie;
    const imgSrc = `${process.env.PUBLIC_URL}/moviePosters/${movieId}.jpg`;

    return (
        <div>
            <div><img src={imgSrc} alt="movie" /></div>
            <div>
                <h3>{name} ({year})</h3>
                <p>{rating} | {runtime}</p>
                <p>{description}</p>
                <p>Director: {director} | Stars: {stars}</p>
            </div>
        </div>
    );
};

Movie.propTypes = {
    movieId: PropTypes.string.isRequired,
    movie: PropTypes.object.isRequired
};


export default Movie;