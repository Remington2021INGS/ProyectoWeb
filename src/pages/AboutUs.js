import { Avatar, Container } from '@material-ui/core';
import React from 'react';

const AboutUs = () => {


    const members = [
        {
            name: 'Esteban Moreno',
            photo: '',
            rol: 'CTO',
        },
        {
            name: 'Miguel Angel',
            photo: '',
            rol: 'CTO',
        },
        {
            name: 'Diego Rodriguez',
            photo: '',
            rol: 'CTO',
        },
        {
            name: 'Andrés Riveros',
            photo: '',
            rol: 'CTO',
        },
        {
            name: 'Alejo Sierra Zuluaga',
            photo: '',
            rol: 'CTO',
        }
    ]
    const memberComponent = (member, indexKey) => (
        <div key={indexKey} className='member'>
            <Avatar />
            <span className='member-name'>{member.name}</span>
            <span className='member-rol'>{member.rol}</span>
        </div>
    )


    return (
        <div className='about-us'>
            <Container className='members-container'>
                {
                    members.map((member, i) => memberComponent(member, i))
                }
            </Container>
        </div>
    )
}

export default AboutUs
