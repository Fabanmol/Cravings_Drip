import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://cravings-drip.firebaseio.com/'
});

export default instance;
