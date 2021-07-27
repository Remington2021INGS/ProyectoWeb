import React from 'react';
import {
    Container,
    IconButton
} from '@material-ui/core';
import {
    AccountCircle
} from '@material-ui/icons'
import routes, { adminRoutes } from '../../routes/routes';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../../assets/img/ecardcoins-logo.png';

const Navigation = () => {

    const history = useHistory();

    return (
        <div className='app-bar'>
            <Container>
                <nav>
                    <img src={logo} alt='logo' />
                    <div className='options'>
                        <ul>
                            {
                                routes.map((route, i) => <li key={i}><NavLink exact activeClassName='active' to={route.route}>{route.name}</NavLink></li>)
                            }
                        </ul>
                    </div>
                    <IconButton color='primary' onClick={() => history.push(adminRoutes.login.route)}>
                        <AccountCircle  />
                    </IconButton> 
                </nav>
            </Container>
        </div>
    )
}

export default Navigation;
