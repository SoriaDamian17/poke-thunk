import { pokeConstanst } from "../../constanst/pokemons";
// import PokeApi from "../../api/pokemon";

const startGetPokemons = payload => ({
    type: pokeConstanst.START_GET_POKEMONS,
    ...payload
});

const successGetPokemons = payload => ({
    type: pokeConstanst.SUCCESS_GET_POKEMONS,
    ...payload
});

export const fetchPokemons = () => dispatch => {
    dispatch(startGetPokemons());
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(resp => resp.json)
    .then(result => dispatch(successGetPokemons(result)));
    // const response = PokeApi.get('pokemon');
    // console.log(response);
    // dispatch(successGetPokemons(response));
};