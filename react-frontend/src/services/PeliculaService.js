import axios from 'axios';

const PELICULA_API_BASE_URL = "http://localhost:8080/api/v1/peliculas";

class PeliculaService {

    getPeliculas(){
        return axios.get(PELICULA_API_BASE_URL);
    }

    createPelicula(pelicula) {
        return axios.post(PELICULA_API_BASE_URL, pelicula);
    }

    updatePelicula(id, peliculaData) {
        const url = `${PELICULA_API_BASE_URL}/${id}`;
        return axios.put(url, peliculaData);
    }

    deletePelicula(id) {
        const url = `${PELICULA_API_BASE_URL}/${id}`;
        return axios.delete(url);
    }

}

const peliculaService = new PeliculaService();
export default peliculaService;