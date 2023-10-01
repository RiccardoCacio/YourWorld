import React from 'react'
import styles from './temperature.module.css'
const TemperatureHeader = () => {
    return (
        <header className={styles.headerTemperature}>
            <div className={styles.headerTemperatureBox}>
                <h4 className={styles.headerTemperatureSubTitle}>
                    L'Innalzamento delle Temperature: <br /> Un Segnale Allarmante del Cambiamento Climatico
                </h4>
                <p className={styles.headerTemperatureP}>
                    L'innalzamento delle temperature globali
                    è un evidente segnale del cambiamento
                    climatico, causato principalmente dalle
                    emissioni di gas serra,
                    in particolare il CO2.
                </p>
            </div>
        </header>
    )
}

export default TemperatureHeader
