import axios from 'axios';


const defaultRequestDatabase = axios.create({
    baseURL: 'https://mcuapi.herokuapp.com/api/v1',
});


export default defaultRequestDatabase;
