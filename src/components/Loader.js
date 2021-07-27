import { CircularProgress } from '@material-ui/core'
import React from 'react'

const Loader = (props) => {

    const {
        isVisible,
        caption
    } = props;

    return (
        <div className='loader' style={{display: isVisible ? 'flex' : 'none'}}>
            <CircularProgress  color='primary' size={70}/>
            {
                caption || 'Procesando la solicitud'
            }
        </div>
    )
}

export default Loader;
