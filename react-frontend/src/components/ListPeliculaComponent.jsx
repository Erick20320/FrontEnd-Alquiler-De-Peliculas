import React, { Component } from 'react';
import PeliculaService from '../services/PeliculaService';
import CreatePeliculaComponent from '../components/CreatePeliculaComponent';

class ListPeliculaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            showModal: false
        };
        this.addPelicula = this.addPelicula.bind(this);
        this.openModal = this.openModal.bind(this);
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
        this.openModal();
    }

    openModal() {
        this.setState({ showModal: true });
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Lista De Películas</h2>
                <hr />
                <div className="d-flex justify-content-end mb-3">
                    <button type="button" className="btn btn-success" onClick={this.openModal}>
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
                                                </tr>
                                        )
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
                {this.state.showModal && <CreatePeliculaComponent closeModal={this.closeModal} refreshPeliculas={this.refreshPeliculas} />}
            </div>
        );
    }
}

export default ListPeliculaComponent;
