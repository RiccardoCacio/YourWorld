import React from 'react'
import './error.css'
import ErrorTriangle from '../../img/svg/errorTriangle.svg'
const Error = () => {
    return (
        <div>
            <img className='errorTriangle' src={ErrorTriangle} alt="" />
            <h3 className='errorText'>Qualcosa è andato storto, <br />
                prova a ricaricare la pagina.
            </h3>

        </div>
    )
}

export default Error
