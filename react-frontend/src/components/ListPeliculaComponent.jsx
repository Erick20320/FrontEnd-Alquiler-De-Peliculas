import React, { Component } from 'react';
import PeliculaService from '../services/PeliculaService';

class ListPeliculaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };
    }

    componentDidMount(){
        PeliculaService.getPeliculas().then((res) => {
            this.setState({peliculas: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Lista de películas</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Genero</th>
                                <th>Año estreno</th>
                                <th>Duracion</th>
                                <th>Director</th>
                                <th>Sinopsis</th>
                                <th>Imagen</th>
                                <th>Disponible</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.peliculas.map(
                                    pelicula =>
                                    <tr key = {pelicula.id}>
                                        <td>{pelicula.titulo}</td>
                                        <td>{pelicula.genero}</td>
                                        <td>{pelicula.anioEstreno}</td>
                                        <td>{pelicula.duracionMinutos}</td>
                                        <td>{pelicula.director}</td>
                                        <td>{pelicula.sinopsis}</td>
                                        <td>{pelicula.imagen}</td>
                                        <td>{pelicula.disponible ? 'Sí' : 'No'}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListPeliculaComponent;
