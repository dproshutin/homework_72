import axios from 'axios';

const instance = axios.create({
    baseURL: "https://homework-72.firebaseio.com/"
});

export default instance;