import { pokeConstanst } from "../../constanst/pokemons";
import PokeApi from "../../api/pokemon";

const startGetPokemons = payload => ({
    type: pokeConstanst.START_GET_POKEMONS,
    ...payload
});

const successGetPokemons = payload => ({
    type: pokeConstanst.SUCCESS_GET_POKEMONS,
    payload
});

const failudeGetPokemons = () => ({
    type: pokeConstanst.FAILUDE_GET_POKEMONS,
});

export const fetchPokemons = () => dispatch => {
    dispatch(startGetPokemons());

    PokeApi.get('pokemon').then((response) => {
        const pokemons = response.data.results;
        dispatch(successGetPokemons(pokemons));
    }).catch((error) => {
        dispatch(failudeGetPokemons(error));
    });

};