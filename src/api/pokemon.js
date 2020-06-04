import axios from 'axios';

const axiosBase = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    responseType: 'json',
});

const PokeApi = {
    get: (url, config) => axiosBase.get(url, config),
};

export default PokeApi;