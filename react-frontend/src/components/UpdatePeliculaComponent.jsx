import React, { Component } from 'react';
import Modal from 'react-modal';
import PeliculaService from '../services/PeliculaService';

class UpdatePeliculaComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            genero: '',
            anioEstreno: '',
            duracionMinutos: '',
            director: '',
            sinopsis: '',
            imagen: '',
            disponible: false
        };
    }

    componentDidMount() {
        // Rellenar el estado con los datos de la película seleccionada
        const pelicula = this.props.pelicula;
        this.setState({
            titulo: pelicula.titulo,
            genero: pelicula.genero,
            anioEstreno: pelicula.anioEstreno,
            duracionMinutos: pelicula.duracionMinutos,
            director: pelicula.director,
            sinopsis: pelicula.sinopsis,
            imagen: pelicula.imagen,
            disponible: pelicula.disponible
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const pelicula = {
            titulo: this.state.titulo,
            genero: this.state.genero,
            anioEstreno: this.state.anioEstreno,
            duracionMinutos: this.state.duracionMinutos,
            director: this.state.director,
            sinopsis: this.state.sinopsis,
            imagen: this.state.imagen,
            disponible: this.state.disponible
        };

        PeliculaService.updatePelicula(this.props.pelicula.id, pelicula)
            .then(() => {
                this.props.refreshPeliculas();
                this.props.closeModal();
            })
            .catch((error) => {
                console.error('Error al actualizar la película:', error);
            });
    };

    render() {
        return (
            <div>
                <Modal isOpen={true} onRequestClose={this.props.closeModal} contentLabel="Modificar Película" overlayClassName="modal-overlay">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title"> Modificar Película</h2>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Título:</label>
                                            <input type="text" name="titulo" className="form-control" value={this.state.titulo} onChange={(e) => this.setState({ titulo: e.target.value })} required/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Género:</label>
                                            <input type="text" name="genero" className="form-control" value={this.state.genero} onChange={(e) => this.setState({ genero: e.target.value })} required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Año de Estreno:</label>
                                            <input type="number" name="anioEstreno" className="form-control" value={this.state.anioEstreno} onChange={(e) => this.setState({ anioEstreno: e.target.value })} required/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Duración (minutos):</label>
                                            <input type="number" name="duracionMinutos" className="form-control" value={this.state.duracionMinutos} onChange={(e) => this.setState({ duracionMinutos: e.target.value })} required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Director:</label>
                                            <input type="text" name="director" className="form-control" value={this.state.director} onChange={(e) => this.setState({ director: e.target.value })} required/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Sinopsis:</label>
                                            <textarea name="sinopsis" className="form-control" value={this.state.sinopsis} onChange={(e) => this.setState({ sinopsis: e.target.value })} required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Imagen:</label>
                                            <input type="text" name="imagen" className="form-control" value={this.state.imagen} onChange={(e) => this.setState({ imagen: e.target.value })} required/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-check">
                                                <input type="checkbox" name="disponible" className="form-check-input" checked={this.state.disponible} onChange={(e) => this.setState({ disponible: e.target.checked })} />
                                                <label className="form-check-label">Disponible</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button type="button" className="btn btn-danger me-2" onClick={this.props.closeModal}>
                                        Cancelar
                                    </button>
                                    <button type="submit" className="btn btn-success">
                                        Agregar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default UpdatePeliculaComponent;
