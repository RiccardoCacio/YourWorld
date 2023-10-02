import React from 'react'
import styles from './methaneHeader.module.css'
const MethaneHeader = () => {
    return (
        <header className={styles.headerMethane}>
            <div className={styles.headerMethaneBox}>
                <h4 className={styles.headerMethaneSubTitle}>
                    Il Potente Impatto del Metano sull'Effetto Serra
                </h4>
                <p className={styles.headerMethaneP}>
                    Il metano è un gas serra naturale
                    noto per il suo potere di
                    riscaldamento globale 25 volte
                    superiore a quello del biossido
                    di carbonio. Sebbene presente
                    in quantità minori, il metano ha un
                    impatto significativo sul cambiamento
                    climatico. Le sue fonti principali
                    includono la decomposizione dei rifiuti,
                    l'industria energetica e l'allevamento
                    di bestiame.
                </p>
            </div>

        </header>
    )
}

export default MethaneHeader
