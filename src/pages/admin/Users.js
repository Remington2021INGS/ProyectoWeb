import {
    Box,
    Button,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    IconButton
} from '@material-ui/core';
import {
    Edit,
    Delete
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import UserModal from '../../components/UserModal';
import firebase from '../../configs/firebase';
import useNotify from '../../hooks/useNotify';

const usersDb = firebase.firestore().collection('users');

const Users = () => {


    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [openModal, setOpenModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    const {
        showMessage
    } = useNotify();

    const fetchUsers = () => {
        setIsLoading(true)
        usersDb.get()
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setUsers(docs);
                setIsLoading(false);
            })
            .catch((err) => {
                showMessage(err.message, 'error');
                setIsLoading(false);
            })
    }

    useEffect(() => {
        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const headers = [
        {
            field: 'created',
            title: 'Fecha de creación',
            type: 'date'
        },
        {
            field: 'names',
            title: 'Nombres',
            type: 'text'
        },
        {
            field: 'lastname',
            title: 'Apellidos',
            type: 'text'
        },
        {
            field: 'dni',
            title: 'Identificación',
            type: 'text'
        },
        {
            field: 'phone',
            title: 'Telefono',
            type: 'text'
        },
    ]

    const handleRowValue = (row, header) => {
        switch (header.type) {
            case 'text':
                return row[header.field]
            case 'date':
                return row[header.field] ? (row[header.field]).toDate().toLocaleString() : row[header.field]
            default:
                return row[header.field]
        }
    }

    const handleConfirmUser = async (userData, currentUser) => {
        setOpenModal(false);
        setIsLoading(true);

        if (currentUser) {
            await usersDb.doc(currentUser.id).set(userData, { merge: true })
                .then(() => {
                    showMessage('Usuario actualizado', 'success')
                })
                .catch((err) => showMessage(err.message, 'error'))
        } else {
            await usersDb.add({ ...userData, created: new Date(Date.now()) })
                .then(() => {
                    showMessage('Usuario creado', 'success')
                })
                .catch((err) => showMessage(err.message, 'error'))
        }

        fetchUsers();
    }

    const handleDeleteUser = async (userId) => {
        setIsLoading(true);
        await usersDb.doc(userId).delete()
            .then(() => {
                showMessage('Usuario eliminado', 'success')
            })
            .catch((err) => showMessage(err.message, 'error'))
        setIsLoading(false);
    }

    return (
        <div>
            <Loader isVisible={isLoading} />
            <UserModal
                currentUser={currentUser}
                open={openModal}
                handleClose={() => setOpenModal(false)}
                handleConfirm={(uData) => handleConfirmUser(uData, currentUser)}

            />
            <h1>Usuarios</h1>
            <Box display='flex' justifyContent='flex-end'>
                <Button color='primary' variant='contained' onClick={() => {
                    setCurrentUser(undefined);
                    setOpenModal(true);
                }}>
                    Nuevo usuario
                </Button>
            </Box>
            <TableContainer component={Paper} className='mt-2 data-table'>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                headers.map((header, i) => <TableCell key={i}>{header.title}</TableCell>)
                            }
                            <TableCell >Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <TableRow key={row.id} className='customRow'>
                                {
                                    headers.map((header, i) => <TableCell key={i} component="th" scope="row">{handleRowValue(row, header)}</TableCell>)
                                }
                                <TableCell component="th" scope="row">
                                    <IconButton className='edit' size='small' onClick={() => {
                                        setCurrentUser(row);
                                        setOpenModal(true);
                                    }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton className='ml-3 delete' size='small' onClick={() => handleDeleteUser(row.id)}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Users;
