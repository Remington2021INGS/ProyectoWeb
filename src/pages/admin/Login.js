import { useState } from 'react'
import { Grid, Hidden, TextField, Button, Box, InputAdornment, IconButton } from '@material-ui/core'
import { AccountCircle, LockRounded, Visibility, VisibilityOff } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/img/ecardcoins-logo.png'

const Login = () => {
    const history = useHistory();

    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
        // showMessage('Prueba', 'success');
        history.push('/');
    };

    return (
        <Grid container spacing={0} className='login-page'>
            <Hidden mdDown>
                <Grid item md={4} className='bg_dark image-container'>
                    <img src={Logo} alt='logo' />
                </Grid>
            </Hidden>
            <Grid item xs={12} lg={8} className='bg_light form-login-container'>
                <Box className='form-login'>
                    <h1 className='mv-4'>Iniciar sesión</h1>
                    <TextField
                        autoFocus
                        fullWidth
                        variant='outlined'
                        name='username'
                        placeholder='Correo electronico'
                        style={{ background: 'white' }}
                        value={credentials.username}
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <AccountCircle color='secondary' />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        fullWidth
                        name='password'
                        type={showPassword ? 'text ' : 'password'}
                        placeholder='Contraseña'
                        variant='outlined'
                        className='mt-3'
                        style={{ background: 'white' }}
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <LockRounded color='secondary' />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ?
                                                <Visibility color='secondary' />
                                                :
                                                <VisibilityOff color='secondary' />
                                        }
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        className='mv-4'
                        variant='contained'
                        color='primary'
                        disabled={!credentials.username || !credentials.password}
                        fullWidth
                        onClick={handleSubmit}
                    >Ingresar
                    </Button>
                    <Button
                        variant='outlined'
                        color='primary'
                        
                        fullWidth
                        onClick={() => history.goBack()}
                    >Volver
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Login;