import React from 'react'
import styles from './ice.module.css'
const IceHeader = () => {
    return (
        <header className={styles.headerIce}>
            <div className={styles.headerIceBox}>
                <h4 className={styles.headerIceSubTitle}>
                    Il Preoccupante Scioglimento <br /> dei Ghiacciai nel Mondo
                </h4>
                <p className={styles.headerIceP}>
                    Lo scioglimento dei ghiacciai
                    è una grave conseguenza del
                    cambiamento climatico globale.
                    Questo fenomeno provoca il ritiro
                    accelerato dei ghiacciai,
                    minacciando gli ecosistemi montani,
                    aumentando il livello del mare e
                    influenzando la disponibilità di acqua potabile.
                </p>
            </div>

        </header>
    )
}

export default IceHeader
