'use client'
import React from 'react';
import { useGetPokemonByNameQuery } from './redux/api'
import { LeftSide, RightSide } from './components'

import './styles.css';

const Pokedex = () => {
    return <div className={'pokedexContainer'}>
        <LeftSide />
        <div className="hinge" />
        <RightSide />
    </div>;
};

export default Pokedex;