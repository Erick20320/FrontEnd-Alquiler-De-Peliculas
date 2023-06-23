import React, { Component } from 'react';
import PeliculaService from '../services/PeliculaService';
import CreatePeliculaComponent from '../components/CreatePeliculaComponent';
import UpdatePeliculaComponent from '../components/UpdatePeliculaComponent';

class ListPeliculaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            showAddModal: false,
            showUpdateModal: false,
            selectedPelicula: null
        };
        this.addPelicula = this.addPelicula.bind(this);
        this.updatePelicula = this.updatePelicula.bind(this);
        this.deletePelicula = this.deletePelicula.bind(this);
        this.openAddModal = this.openAddModal.bind(this);
        this.openUpdateModal = this.openUpdateModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.refreshPeliculas = this.refreshPeliculas.bind(this);
    }

    componentDidMount() {
        PeliculaService.getPeliculas().then((res) => {
            this.setState({ peliculas: res.data });
        });
    }
    /*
        addPelicula(){
            this.props.history.push('/add-Pelicula');
        }
    */

    refreshPeliculas() {
        PeliculaService.getPeliculas()
            .then((res) => {
                this.setState({ peliculas: res.data });
            })
            .catch((error) => {
                console.error('Error al obtener las películas:', error);
            });
    }

    addPelicula() {
        this.openAddModal();
    }

    updatePelicula(id) {
        const pelicula = this.state.peliculas.find((pelicula) => pelicula.id === id);
        this.setState({ selectedPelicula: pelicula, showUpdateModal: true });
    }

    deletePelicula(id) {
        PeliculaService.deletePelicula(id)
            .then((res) => {
                console.log('Película eliminada con éxito');
                this.refreshPeliculas();
            })
            .catch((error) => {
                console.error('Error al eliminar la película:', error);
            });
    }

    openAddModal() {
        this.setState({ showAddModal: true });
    }

    openUpdateModal() {
        this.setState({ showUpdateModal: true });
    }

    closeModal() {
        this.setState({ showAddModal: false, showUpdateModal: false });
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Lista De Películas</h2>
                <hr />
                <div className="d-flex justify-content-end mb-3">
                    <button type="button" className="btn btn-success" onClick={this.openAddModal}>
                        Agregar
                    </button>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">

                                <thead>
                                    <tr>
                                        <th>Título</th>
                                        <th>Género</th>
                                        <th>Año estreno</th>
                                        <th>Duración</th>
                                        <th>Director</th>
                                        <th>Sinopsis</th>
                                        <th>Disponible</th>
                                        <th>Imagen</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        this.state.peliculas.map(
                                            pelicula =>
                                                <tr key={pelicula.id}>
                                                    <td>{pelicula.titulo}</td>
                                                    <td>{pelicula.genero}</td>
                                                    <td>{pelicula.anioEstreno}</td>
                                                    <td>{pelicula.duracionMinutos}</td>
                                                    <td>{pelicula.director}</td>
                                                    <td>{pelicula.sinopsis}</td>
                                                    <td>{pelicula.disponible ? 'Sí' : 'No'}</td>
                                                    <td>{pelicula.imagen}</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button className="btn btn-primary" onClick={() => this.updatePelicula(pelicula.id)}>
                                                                Modificar
                                                            </button>
                                                            <div className="mx-1"></div>
                                                            <button className="btn btn-danger" onClick={() => this.deletePelicula(pelicula.id)}>
                                                                Eliminar
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
                {this.state.showAddModal && (
                    <CreatePeliculaComponent
                        closeModal={this.closeModal}
                        refreshPeliculas={this.refreshPeliculas}
                    />
                )}
                {this.state.showUpdateModal && (
                    <UpdatePeliculaComponent
                        closeModal={this.closeModal}
                        refreshPeliculas={this.refreshPeliculas}
                        pelicula={this.state.selectedPelicula}
                    />
                )}
            </div>
        );
    }
}

export default ListPeliculaComponent;
