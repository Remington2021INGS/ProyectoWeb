import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button
} from '@material-ui/core';

const UserModal = (props) => {


    const initialState = {
        names: '',
        lastname: '',
        dni: '',
        phone: ''
    }

    const [userData, setUserData] = useState(initialState)

    const {
        open,
        handleClose,
        handleConfirm,
        currentUser
    } = props;

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (currentUser) {
            setUserData({
                names: currentUser.names,
                lastname: currentUser.lastname,
                dni: currentUser.dni,
                phone: currentUser.phone
            })
        } else {
            setUserData(initialState);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser])

    return (
        <Dialog
            open={open}
            onClose={() => handleClose()}
        >
            <DialogTitle>
                {currentUser ? 'Editar usuario' : 'Crear usuario'}
            </DialogTitle>
            <DialogContent>
                <TextField
                    required
                    name='names'
                    className='input mt-2'
                    variant='outlined'
                    fullWidth
                    placeholder='Nombres'
                    value={userData.names}
                    onChange={handleChange}
                />
                <TextField
                    required
                    name='lastname'
                    className='input mt-2' 
                    variant='outlined'
                    fullWidth
                    placeholder='Apellidos'
                    value={userData.lastname}
                    onChange={handleChange}
                />
                <TextField
                    required
                    name='dni'
                    className='input mt-2'
                    variant='outlined'
                    fullWidth
                    placeholder='Identificación'
                    value={userData.dni}
                    onChange={handleChange}
                />
                <TextField
                    required
                    name='phone'
                    className='input mt-2'
                    variant='outlined'
                    fullWidth
                    placeholder='Telefono'
                    value={userData.phone}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant='outlined'>
                    Cancelar
                </Button>
                <Button onClick={() => handleConfirm(userData)} variant='contained' color='primary'>
                    {currentUser ? 'Guardar cambios' : 'Crear usuario'}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UserModal
