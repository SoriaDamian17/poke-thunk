import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemons } from '../Redux/actions/pokemons';
import Layout from '../components/Layout';

import '../styles/home.scss';

export default () => {

    const dispatch = useDispatch();
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        if (pokemons.length === 0) {
            dispatch(fetchPokemons());
            setPokemons([{}, {}]);
        }
    });

    return (
        <Layout title="Home">
            <div className="ui container">
                <h1>Hello Poke-Thunk</h1>
            </div>
        </Layout>
    );
};