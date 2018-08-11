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
                <div className="col-1"><img src={imgSrc} alt="movie" /></div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">{name} ({year})</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{rating} | {runtime} { genre ? `| ${genre}` : null }</h6>
                        <p className="card-text">{description}</p>
                        <p className="card-text text-muted">Director: {director} | Stars: {stars}</p>

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