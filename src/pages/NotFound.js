import React from 'react'
import notFoundIng from '../assets/img/notFound.svg';
const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={notFoundIng} alt='not found'/>
            Pagina no encontrada
        </div>
    )
}

export default NotFound;
