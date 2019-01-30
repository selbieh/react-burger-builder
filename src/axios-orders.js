import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sayed-react-project.firebaseio.com/'
});

export default instance;