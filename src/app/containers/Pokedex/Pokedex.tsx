'use client'

import React, { lazy, Suspense } from 'react';
import { LeftSide, RightSide } from './components'

import { useAppSelector } from '@redux/hooks';
import { selectModalIsOpen } from '@app/containers/Pokedex/redux/modal';

const Modal = lazy(() => import('@app/components/Modal'));

import styles from './styles.module.css';

const Pokedex = () => {
    const modalIsOpen = useAppSelector(selectModalIsOpen);
    
    return <>
        <div className={styles.pokedexContainer}>
            <LeftSide />
            <div className={styles.hinge} />
            <RightSide />
        </div>
        <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
            {modalIsOpen && <Modal />}
        </Suspense>
    </>;
};

export default Pokedex;