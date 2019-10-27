import React from 'react';
import PropTypes from 'prop-types';


const Movie = ({ movieId, movie, movieActions }) => {
    const {
        name,
        year,
        description,
        director,
        stars,
        rating,
        runtime,
        genre,
        notes
    } = movie;

    const imgSrc = `${process.env.PUBLIC_URL}/moviePosters/${movieId}.jpg`;

    return (
        <div className="card mb-3">
            <div className="row">
                <div className="col-1"><img src={imgSrc} alt={`${name} movie poster`} /></div>
                <div className="col">
                    <div className="card-body">
                        <h2 className="card-title">{name} ({year})</h2>
                        <div className="card-subtitle mb-2 text-muted">
                            Rating: {rating} | Runtime: {runtime} mins { genre ? `| Genre: ${genre}` : null }
                        </div>
                        <div aria-label="movie description" className="card-text mb-2">{description}</div>
                        <div className="card-text text-muted">Director: {director} | Stars: {stars}</div>

                        { notes
                            ? <div className="blockquote-footer notes">
                                Notes: {notes}
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card-footer">
                        {movieActions}
                    </div>
                </div>
            </div>
        </div>
    );
};

Movie.defaultProps = {
    movieActions: null
};

Movie.propTypes = {
    movieId: PropTypes.string.isRequired,
    movie: PropTypes.object.isRequired,
    movieActions: PropTypes.node
};


export default Movie;
