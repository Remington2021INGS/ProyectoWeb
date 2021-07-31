import { Avatar, Container } from '@material-ui/core';
import React from 'react';
import image from '../assets/img/hold_card.svg'

const AboutUs = () => {


    const members = [
        {
            name: 'Esteban Moreno',
            photo: '',
            rol: 'Gerente General',
        },
        {
            name: 'Miguel Angel',
            photo: '',
            rol: 'Soporte TI',
        },
        {
            name: 'Diego Rodriguez',
            photo: '',
            rol: 'CTO',
        },
        {
            name: 'Andrés Riveros',
            photo: '',
            rol: 'Asesor de cartera',
        },
        {
            name: 'Alejo Sierra Zuluaga',
            photo: '',
            rol: 'Relaciones publicas',
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
            <Container className='about-us-container'>
                <p className='leyend'>E-card coins es una empresa dedicada a la venta de tarjetas de credito digitales, con la cual se pueden comprar productos en linea o presencialmente en cualquier parte del mundo. Tendras acceso a una tasa mensual de intereses muy baja.</p>

 
                <h1>Tenemos dos tipos de tarjetas de credito:</h1>
                
                <div className='types'>
                    <div className='type-card bg-1 '>
                        <span className='title'>Premium</span>
                        <span className='content'>Con esta tarjeta al primer mes tendran mayores beneficios, si realizas compras mayores a 500 mil pesos puede que te salga gratis la compra, todo depende de un sorteo aleatorio que realiza nuestro sistema dentro de todos los afiliados a premium.</span>
                        <img src={image} alt='card' className='holdCard'/>
                    </div>
                    <div className='type-card bg-2 '>
                        <span className='title'>Lowcost</span> 
                        <span className='content'>Este tipo de tarjeta de credito tiene un 5% de descuento en compras en almacenes como exito, ktronix, falabella, durante el primer mes.</span>
                        <img src={image} alt='card' className='holdCard'/>
                    </div>
                </div>

               
                
                <span className='info'>Cualquiera de las dos tarjetas es una buena opcion para ti, adquierela y usala en cualquier lugar.</span>
            </Container>
            <Container className='members-container mt-10'>
                {
                    members.map((member, i) => memberComponent(member, i))
                }
            </Container>
        </div>
    )
}

export default AboutUs
