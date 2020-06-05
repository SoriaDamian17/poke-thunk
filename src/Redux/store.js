import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pokeReducer from './reducers/pokemons';

function reducers() {
    return {
        pokeReducer
    };
}

const store = createStore(reducers, applyMiddleware(thunk));

export default store;