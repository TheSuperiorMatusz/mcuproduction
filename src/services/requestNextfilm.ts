import axios from 'axios';


const requestNextFilm = () => {
    axios.get<NextMovie>('https://www.whenisthenextmcufilm.com/api')
}


export default requestNextFilm;