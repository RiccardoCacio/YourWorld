import React from 'react'
import styles from './error.module.css'
import ErrorTriangle from '../../img/svg/errorTriangle.svg'
const Error = () => {
    return (
        <div>
            <img className={styles.errorTriangle} src={ErrorTriangle} alt="" />
            <h3 className={styles.errorText}>Qualcosa è andato storto, <br />
                prova a ricaricare la pagina.
            </h3>

        </div>
    )
}

export default Error
