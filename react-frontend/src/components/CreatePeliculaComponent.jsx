import React, { Component } from 'react';
import Modal from 'react-modal';
import PeliculaService from '../services/PeliculaService';

class CreatePeliculaComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            genero: '',
            anioEstreno: '',
            duracionMinutos: '',
            director: '',
            sinopsis: '',
            imagen: null,
            disponible: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('imagen', this.state.imagen);
        formData.append('pelicula', JSON.stringify({
            titulo: this.state.titulo,
            genero: this.state.genero,
            anioEstreno: this.state.anioEstreno,
            duracionMinutos: this.state.duracionMinutos,
            director: this.state.director,
            sinopsis: this.state.sinopsis,
            disponible: this.state.disponible
        }));

        PeliculaService.createPelicula(formData)
            .then(response => {
                console.log('imagen guardada exitosamente');
                this.setState({
                    titulo: '',
                    genero: '',
                    anioEstreno: '',
                    duracionMinutos: '',
                    director: '',
                    sinopsis: '',
                    imagen: null,
                    disponible: false
                });
                this.props.closeModal();
                this.props.refreshPeliculas();
            })
            .catch(error => {
                console.error('Error al guardar la película:', error);
            });
    }

    handleImageChange(e) {
        this.setState({ imagen: e.target.files[0] });
    }

    render() {
        return (
            <Modal isOpen={true} onRequestClose={this.props.closeModal} contentLabel="Agregar Película" overlayClassName="modal-overlay">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title"> Agregar Película</h2>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Título</label>
                                        <input type="text" name="titulo" className="form-control" value={this.state.titulo} onChange={(e) => this.setState({ titulo: e.target.value })} required />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Género</label>
                                        <input type="text" name="genero" className="form-control" value={this.state.genero} onChange={(e) => this.setState({ genero: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2 mb-3">
                                        <label className="form-label">Año de Estreno</label>
                                        <input type="number" name="anioEstreno" className="form-control" value={this.state.anioEstreno} onChange={(e) => this.setState({ anioEstreno: e.target.value })} required />
                                    </div>
                                    <div className="col-md-2 mb-3">
                                        <label className="form-label">Duración (minutos)</label>
                                        <input type="number" name="duracionMinutos" className="form-control" value={this.state.duracionMinutos} onChange={(e) => this.setState({ duracionMinutos: e.target.value })} required />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Director</label>
                                        <input type="text" name="director" className="form-control" value={this.state.director} onChange={(e) => this.setState({ director: e.target.value })} required />
                                    </div>
                                    <div className="col-md-2 mb-3 mt-4">
                                        <div className="form-check">
                                            <input type="checkbox" name="disponible" className="form-check-input" checked={this.state.disponible} onChange={(e) => this.setState({ disponible: e.target.checked })} />
                                            <label className="form-check-label">Disponible</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Sinopsis</label>
                                        <textarea name="sinopsis" className="form-control" value={this.state.sinopsis} onChange={(e) => this.setState({ sinopsis: e.target.value })} required />
                                    </div>
                                    <div className="col-md-6 mb-3 ">
                                        <label className="form-label">Imagen</label>
                                        <input type="file" name="imagen" className="form-control" onChange={this.handleImageChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-center pt-4">
                                <button type="button" className="btn btn-danger me-2" onClick={this.props.closeModal}>
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn-success">
                                    Agregar
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
            </Modal >
        );
    }
}

export default CreatePeliculaComponent;