import React from 'react';
import { Container, Grid } from '@material-ui/core'

import reqs from '../assets/img/requirements.svg';
import arrow from '../assets/img/arrow-right-circle.svg';

const Requirements = () => {

    const rqs = [
        'Tener entre 18 y 75 años.',
        'Documento de identidad.',
        'Contar con tu cuenta E-Card Coins verificada.',
        'Disponibilidad para cambiar tu vida financiera 😀.',
    ];
    return (
        <div className='requirements'>
            <Container>
                <Grid container>
                    <Grid item md={4} sm={12} xs={12} style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <img className='rqLogo' alt='Requirements' src={reqs} />
                    </Grid>
                    <Grid item md={8} sm={12} xs={12}>
                        <h1>Requisitos</h1>
                        {                            rqs.map((item, i) => (
                                <div className='rqComponent' key={i}>
                                    <img alt='Requirements' src={arrow} />
                                    {item}
                                </div>
                            ))
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Requirements;
