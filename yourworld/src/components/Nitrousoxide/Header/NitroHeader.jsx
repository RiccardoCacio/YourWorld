import React from 'react'
import styles from './nitroHeader.module.css'
const NitroHeader = () => {
    return (
        <header className={styles.headerNitro}>
            <div className={styles.headerNitroBox}>
                <h4 className={styles.headerNitroSubTitle}>
                    L'Ossido di Azoto (NO2): <br /> Impatto Ambientale e Fonti di Emissione
                </h4>
                <p className={styles.headerNitroP}>
                    L'ossido di azoto (NO2)
                    è un inquinante atmosferico di
                    origine industriale e veicolare.
                    Questo gas danneggia la salute umana,
                    causando problemi respiratori,
                    ed è un contribuente al cambiamento
                    climatico in quanto agisce come gas
                    serra.
                </p>
            </div>
        </header>
    )
}

export default NitroHeader
