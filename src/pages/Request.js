import {
    Container,
    Grid,
    TextField,
    Button
} from '@material-ui/core';
import {
    Alert
} from '@material-ui/lab';
import React, { useState } from 'react';
import Loader from '../components/Loader';

const Request = () => {

    const requestObject = {
        firstName: '',
        lastName: '',
        dniType: '',
        dni: '',
        birthday: '',
        phone: '',
        email: '',
        profession: '',
        address: '',
    }

    const [isLoading, setIsLoading] = useState(false);
    const [userRequest, setUserRequest] = useState(requestObject);
    const [validate, setValidate] = useState(false);

    const handleSubmit = () => {
        if (validInfo()) {
            setValidate(false);
            setIsLoading(true);
            handleClean();
        } else {
            setValidate(true);
        }
    }

    const handleClean = () => {
        setUserRequest(requestObject);
        setValidate(false);
    }

    const handleChange = (e) => {
        setUserRequest({ ...userRequest, [e.target.name]: e.target.value });
    }

    const validInfo = () => {
        return !Object.values(userRequest).includes('');
    }

    return (
        <div className='request'>
            <Loader isVisible={isLoading} />
            <Container>
                <h1 style={{ marginTop: '0px' }}>Solicita tu E-Card Coins</h1>
                <Alert severity='info'>
                    Nota: Despues de enviado el formulario, en el transcurso de 24 horas nos comunicaremos
                    con usted para terminar el proceso de solicitud de su E-Card.
                </Alert>
                <Grid container style={{ marginTop: '24px' }} spacing={3}>
                    <Grid item md={6} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <TextField
                            required
                            name='firstName'
                            className='input'
                            variant='outlined'
                            placeholder='Nombres'
                            fullWidth
                            autoFocus
                            onChange={handleChange}
                            value={userRequest.firstName}
                            helperText={validate && userRequest.firstName.length === 0 ? 'El campo es obligatorio' : ''}
                        />
                        <TextField
                            name='lastName'
                            className='input'
                            variant='outlined'
                            placeholder='Apellidos'
                            fullWidth
                            onChange={handleChange}
                            value={userRequest.lastName}
                            helperText={validate && userRequest.lastName.length === 0 ? 'El campo es obligatorio' : ''}
                        />
                        <TextField
                            name='dniType'
                            className='input'
                            variant='outlined'
                            placeholder='Tipo de documento'
                            fullWidth
                            onChange={handleChange}
                            value={userRequest.dniType}
                            helperText={validate && userRequest.dniType.length === 0 ? 'El campo es obligatorio' : ''}
                        />
                        <TextField
                            name='dni'
                            className='input'
                            variant='outlined'
                            placeholder='Numero de documento'
                            fullWidth
                            onChange={handleChange}
                            value={userRequest.dni}
                            helperText={validate && userRequest.dni.length === 0 ? 'El campo es obligatorio' : ''}
                        />
                        <TextField
                            name='birthday'
                            className='input'
                            variant='outlined'
                            placeholder='Fecha de nacimiento'
                            fullWidth
                            onChange={handleChange}
                            value={userRequest.birthday}
                            helperText={validate && userRequest.birthday.length === 0 ? 'El campo es obligatorio' : ''}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <TextField
                            name='phone'
                            className='input'
                            variant='outlined'
                            placeholder='Numero de contacto'
                            fullWidth
                            onChange={handleChange}
                            value={userRequest.phone}
                            helperText={validate && userRequest.phone.length === 0 ? 'El campo es obligatorio' : ''}
                        />
                        <TextField
                            name='email'
                            className='input'
                            variant='outlined'
                            placeholder='Correo electronico'
                            fullWidth
                            onChange={handleChange}
                            value={userRequest.email}
                            helperText={validate && userRequest.email.length === 0 ? 'El campo es obligatorio' : ''}
                        />
                        <TextField
                            name='profession'
                            className='input'
                            variant='outlined'
                            placeholder='Ocupación'
                            fullWidth
                            onChange={handleChange}
                            value={userRequest.profession}
                            helperText={validate && userRequest.profession.length === 0 ? 'El campo es obligatorio' : ''}
                        />
                        <TextField
                            name='address'
                            className='input'
                            variant='outlined'
                            placeholder='Dirección de residencia'
                            fullWidth
                            onChange={handleChange}
                            value={userRequest.address}
                            helperText={validate && userRequest.address.length === 0 ? 'El campo es obligatorio' : ''}
                        />

                    </Grid>
                </Grid>
                <div className='actions'>
                    <Button
                        onClick={handleClean}
                        variant='outlined'
                        color='secondary'>
                        Limpiar
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        variant='contained'
                        color='primary' >
                        Solicitar
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default Request
