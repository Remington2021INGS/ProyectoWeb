import { AppBar, Button, Container, Drawer, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../../configs/firebase';
import menuItems from './MenuItems';

const AdminLayout = ({ children }) => {

    const [selectedMenu, setSelectedMenu] = useState(0);

    const history = useHistory();

    const handleLogout = () => {
        firebase.auth().signOut();
        history.push('/');
    }

    const handleMenuSelect = (index) => {
        setSelectedMenu(index);
        history.push(menuItems[index].route);
    }

    return (
        <div className='admin-layout'>
            <AppBar className='appbar'>
                <Toolbar className='toolbar'>
                    <span className='title'>E-Card Coins Panel administrativo</span>
                    <Button variant='outlined' color='primary' onClick={handleLogout}>
                        Cerrar sesion
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className='drawer'
                classes={{
                    paper: 'drawer'
                }}
            >
                {
                    menuItems.map((item, i) => (
                        <ListItem
                            button
                            key={i}
                            className='list-item'
                            selected={selectedMenu === i}
                            onClick={() => {
                                handleMenuSelect(i);
                            }}>                        
                            <ListItemIcon style={{color: selectedMenu === i ? '#E6E922' : 'white'}}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} className='mt-1 mb-1' style={{color: selectedMenu === i ? '#E6E922' : 'white'}}/>
                        </ListItem>
                    ))
                }
            </Drawer>
            <main className='content'>
                <Container>
                    {children}
                </Container>
            </main>
        </div>
    );
}

export default AdminLayout;