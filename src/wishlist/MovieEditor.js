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
        this.handleClose = this.handleClose.bind(this);
    }

    handleChangeNotes(event) {
        this.setState({ notes: event.target.value });
    }

    handleSave() {
        const { updateMovie } = this.props;
        const { notes } = this.state;

        updateMovie({ notes });
    }

    handleClose() {
        const { movie, updateMovie } = this.props;

        updateMovie({ notes: movie.notes });
    }

    render() {
        const { notes } = this.state;

        return (
            <Modal>
                <div className="modal fade show">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Movie</h5>
                                <button type="button" className="close" onClick={this.handleClose}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Notes:</label>
                                    <textarea className="form-control" value={notes} onChange={this.handleChangeNotes} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.handleSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show" />
            </Modal>
        );
    }
}

MovieEditor.defaultTypes = {
    movie: {}
};

MovieEditor.propTypes = {
    movie: PropTypes.object,
    updateMovie: PropTypes.func.isRequired
};


export default MovieEditor;
