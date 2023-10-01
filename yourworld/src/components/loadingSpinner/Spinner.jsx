import React from 'react'
import styles from './spinner.module.css'
const Spinner = () => {
    return (
        <>
            <div className={styles.loader}>
            </div>
            <h3 className={styles.loaderText}>Loading...</h3>
        </>
    )
}

export default Spinner
