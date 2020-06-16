import { pokeConstanst } from '../../constanst/pokemons';

const initialState = [];

function pokeReducer(state = initialState, { type, payload}) {
    switch(type) {
        case pokeConstanst.SUCCESS_GET_POKEMONS:
            return [
                ...payload
            ];
        default:
            return state;
    }
}

export default pokeReducer;