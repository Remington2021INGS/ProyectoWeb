import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';

import cardGroup from '../assets/img/card_group.svg';
import { Link } from 'react-router-dom';
import Cards from 'react-credit-cards';

const Home = () => {

    const loops = [
        'number',
        'name',
        'expiry',
        'cvc'
    ]

    const initialState = {
        cvc: '',
        expiry: '',
        name: '',
        number: '',
        focused: ''
    }

    const [cardState, setCardState] = useState(initialState);

    const placeHolder = {
        cvc: '123',
        expiry: 1230,
        name: 'E-CARD COINS',
        number: '4200123412341234',
    }

    const cardAnimation = async () => {
        while (true) {
            for (const item of loops) {
                await new Promise(resolve => setTimeout(() => {
                    setCardState(prev => ({...prev, [item]: placeHolder[item], focused: item}))
                    resolve(true);
                }, 1000))
            }
            await new Promise(resolve => setTimeout(() => {
                setCardState(initialState)
                resolve(true);
            }, 2000))            
        }        
    }

    useEffect(() => {
        cardAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='home'>
            <article className='section-1'>
                <Container className='container'>
                    <Grid container>
                        <Grid item md={6} sm={12}>
                            <h1>
                                Comprar en cualquier lugar con tu E-Card, es muy facil.
                                Solicitala <Link className='link' to={'/request'}>¡Aqui!</Link>
                            </h1>
                        </Grid>
                        <Grid item md={6} sm={12} style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <img alt='cardGroup' src={cardGroup} />
                        </Grid>
                    </Grid>

                </Container>
            </article>
            <article className='section-2'>
                <Container className='container'>
                    <Grid container>
                        <Grid item md={6} sm={12}>
                            <Cards
                                {...cardState}
                            />
                        </Grid>
                        <Grid item md={6} sm={12} style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <h1>
                                ¡Usala como cualquier tarjeta!
                            </h1>
                        </Grid>
                    </Grid>
                </Container>
            </article>
        </div>
    )
}

export default Home
