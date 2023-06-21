import axios from 'axios';

const PELICULA_API_BASE_URL = "http://192.168.1.24:8080/api/v1/peliculas";

class PeliculaService {

    getPeliculas(){
        return axios.get(PELICULA_API_BASE_URL);
    }

}

const peliculaService = new PeliculaService();
export default peliculaService;