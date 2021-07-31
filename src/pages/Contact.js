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
import firebase from '../configs/firebase';
import useNotify from '../hooks/useNotify';
const contactDb = firebase.firestore().collection('contacts');

const Contact = () => {

    const contactObject = {
        names: '',
        lastnames: '',
        birthdate: '',
        phone: '',
        email: '',
        message: '',
    }

    const {
        showMessage
    } = useNotify();

    const [isLoading, setIsLoading] = useState(false);
    const [contactRequest, setContactRequest] = useState(contactObject);
    const [validate, setValidate] = useState(false);

    const handleSubmit = () => {
        if (validInfo()) {
            setValidate(false);
            setIsLoading(true);
            contactDb.add({ ...contactRequest, created: new Date(Date.now()) })
                .then(() => {
                    handleClean();
                    setIsLoading(false)
                    showMessage('Solicitud enviada con exito', 'success');
                })
        } else {
            setValidate(true);
        }
    }

    const validInfo = () => {
        return !Object.values(contactRequest).includes('');
    }

    const handleClean = () => {
        setContactRequest(contactObject);
        setValidate(false);
    }

    const handleChange = (e) => {
        setContactRequest({ ...contactRequest, [e.target.name]: e.target.value });
    }

    return (
        <div className='contact'>
            <Loader isVisible={isLoading} />
            <Container>
                <h1 style={{ marginTop: '0px' }}>Solicita tu E-Card Coins</h1>
                <Alert severity='info'>
                    Nuestros horarios de atencion son de lunes a viernes, entre 8:00 am a 6:00pm, Nos pondremos en contacto lo mas pronto posible.
                </Alert>
                <Grid container style={{ marginTop: '24px' }} spacing={3}>
                    <Grid item md={6} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <TextField
                            required
                            name='names'
                            className='input'
                            variant='outlined'
                            placeholder='Nombres'
                            fullWidth
                            autoFocus
                            onChange={handleChange}
                            value={contactRequest.names}
                            helperText={validate && contactRequest.names.length === 0 ? 'El campo es obligatorio' : ''}
                        />
                        <TextField
                            name='lastnames'
                            className='input'
                            variant='outlined'
                            placeholder='Apellidos'
                            fullWidth
                            onChange={handleChange}
                            value={contactRequest.lastnames}
                            helperText={validate && contactRequest.lastnames.length === 0 ? 'El campo es obligatorio' : ''}
                        />
                        <TextField
                            name='email'
                            className='input'
                            variant='outlined'
                            placeholder='Correo electronico'
                            fullWidth
                            onChange={handleChange}
                            value={contactRequest.email}
                            helperText={validate && contactRequest.email.length === 0 ? 'El campo es obligatorio' : ''}
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
                            value={contactRequest.phone}
                            helperText={validate && contactRequest.phone.length === 0 ? 'El campo es obligatorio' : ''}
                        />
                        <TextField
                            name='birthdate'
                            className='input'
                            variant='outlined'
                            placeholder='Fecha de nacimiento'
                            fullWidth
                            onChange={handleChange}
                            value={contactRequest.birthdate}
                            helperText={validate && contactRequest.birthdate.length === 0 ? 'El campo es obligatorio' : ''}
                        />
                    </Grid>
                </Grid>
                <div className='mt-3'>
                <span >Redacte el motivo de su consulta:</span>
                </div>
                <TextField
                    name='message'
                    className='input mt-2 mb-3'
                    variant='outlined'
                    multiline
                    placeholder='Motivo de consulta'
                    fullWidth
                    onChange={handleChange}
                    value={contactRequest.message}
                    helperText={validate && contactRequest.message.length === 0 ? 'El campo es obligatorio' : ''}
                />
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
                        Enviar
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default Contact
