import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../primitives/Modal';


class MovieEditor extends Component {
    constructor(props) {
        super(props);

        const { movie } = this.props;

        this.state = {
            notes: movie.notes
        };

        this.handleChangeNotes = this.handleChangeNotes.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChangeNotes(event) {
        this.setState({ notes: event.target.value });
    }

    handleSave() {
        const { updateMovie } = this.props;
        const { notes } = this.state;

        updateMovie({ notes });
    }

    render() {
        const { notes } = this.state;

        return (
            <Modal>
                <div>
                    Notes:
                    <textarea value={notes} onChange={this.handleChangeNotes} />
                    <button onClick={this.handleSave}>Save</button>
                </div>
            </Modal>
        );
    }
}

MovieEditor.propTypes = {
    movie: PropTypes.object.isRequired,
    updateMovie: PropTypes.func.isRequired
};


export default MovieEditor;
