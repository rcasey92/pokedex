'use client'
import React from 'react';
import { useGetPokemonByNameQuery } from './redux/api'
import { LeftSide, RightSide } from './components'

import './styles.css';

const Pokedex = () => {
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    return <div className={'pokedexContainer'}>
        <LeftSide />
        <RightSide />
    </div>;
};

export default Pokedex;