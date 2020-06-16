import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../Redux/actions/pokemons';
import Layout from '../components/Layout';

import '../styles/home.scss';

export default () => {

    const dispatch = useDispatch();
    const pokeList = useSelector(state => {
        console.log('pokeReducer', state);
        return state.pokeReducer.payload;
    });
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function getData() {
            await dispatch(fetchPokemons());
        }
        getData();
        setPokemons(pokeList || []);
    },[pokeList]);

    return (
        <Layout title="Home">
            <div className="ui container">
                <h1>Hello Poke-Thunk</h1>
                {pokemons.length === 0 && pokemons.map(item => item)}
            </div>
        </Layout>
    );
};