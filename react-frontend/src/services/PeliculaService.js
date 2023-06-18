import axios from 'axios';

const PELICULA_API_BASE_URL = "http://localhost:8080/api/v1/peliculas";

class PeliculaService {

    getPeliculas(){
        return axios.get(PELICULA_API_BASE_URL);
    }

}

export default new PeliculaService()