import axios from 'axios';


const defaultRequest = axios.create({
    baseURL: 'https://mcuapi.herokuapp.com/api/v1',
});


export default defaultRequest;
