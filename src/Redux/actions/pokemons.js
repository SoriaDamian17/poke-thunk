import { pokeConstanst } from "../../constanst/pokemons";
import PokeApi from "../../api/pokemon";

const startGetPokemons = payload => ({
    type: pokeConstanst.START_GET_POKEMONS,
    ...payload
});

const successGetPokemons = payload => ({
    type: pokeConstanst.SUCCESS_GET_POKEMONS,
    ...payload
});

export const fetchPokemons = () => {
    return dispatch => {
        dispatch(startGetPokemons());
        const response = PokeApi.get('pokemon');
        console.log(response);
        dispatch(successGetPokemons(response));
    };
};