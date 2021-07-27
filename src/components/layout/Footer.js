import React from 'react';
import {
    Container,
    Grid,
    IconButton
} from '@material-ui/core';
import {
    Facebook,
    Instagram,
    WhatsApp
} from '@material-ui/icons';
import routes from '../../routes/routes';
import logo from '../../assets/img/ecardcoins-logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Grid container style={{ height: '100%' }}>
                    <Grid item md={3} sm={12} style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt='logo' width={100} />
                    </Grid>
                    <Grid item md={3} sm={12}>
                        {
                            routes.map((route, i) => <li className='nav-link' key={i}><NavLink to={route.route}>{route.name}</NavLink></li>)
                        }
                    </Grid>
                    <Grid item md={3} sm={12}>
                        Dirección electronica: Ecardcoins@gerencia.com.co <br></br><br></br>
                        Números de contacto: <br></br> 6758784 - 6568952
                    </Grid>
                    <Grid item md={3} sm={12} style={{justifySelf: 'flex-end'}}>
                        <IconButton color='inherit'>
                            <Facebook />
                        </IconButton>
                        <IconButton color='inherit'>
                            <Instagram />
                        </IconButton>
                        <IconButton color='inherit'>
                            <WhatsApp />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer
