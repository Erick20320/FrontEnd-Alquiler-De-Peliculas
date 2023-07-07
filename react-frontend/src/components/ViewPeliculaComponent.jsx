import React, { Component } from 'react';
import Modal from 'react-modal';

class ViewPeliculaComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pelicula: {}
        };
    }

    render() {
        const { pelicula } = this.props;
        return (
            <Modal isOpen={true} onRequestClose={this.props.closeModal} contentLabel="Ver Película" overlayClassName="modal-overlay">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title"> Ver Película</h2>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <img src={pelicula.imagen} alt={pelicula.titulo} className="img-fluid" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <h4>{pelicula.titulo}</h4>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Año de Estreno</label>
                                            <input type="number" name="anioEstreno" className="form-control" value={pelicula.anioEstreno} readOnly />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Duración (minutos)</label>
                                            <input type="number" name="duracionMinutos" className="form-control" value={pelicula.duracionMinutos} readOnly />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Género</label>
                                            <input type="text" name="genero" className="form-control" value={pelicula.genero} readOnly />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Director</label>
                                            <input type="text" name="director" className="form-control" value={pelicula.director} readOnly />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-check">
                                                <input type="checkbox" name="disponible" className="form-check-input" checked={pelicula.disponible} disabled />
                                                <label className="form-check-label">Disponible</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <label className="form-label">Sinopsis</label>
                                            <textarea name="sinopsis" className="form-control" value={pelicula.sinopsis} readOnly />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-danger me-2" onClick={this.props.closeModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ViewPeliculaComponent;
