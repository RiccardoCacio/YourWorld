import React from 'react'
import styles from './home.module.css'
const HomeHeader = () => {
    return (
        <header className={styles.headerHome}>
            <div className={styles.headerHomeBox}>
                <h1 className={styles.headerHomeTitle}>Your World</h1>
                <h4 className={styles.headerHomeSubTitle}>Cambiare il Futuro: Monitoraggio del Climate Change in Tempo Reale</h4>
                <p className={styles.headerHomeP}>Il nostro sito web offre un accesso immediato
                    e intuitivo ai dati più recenti sul climate change.
                    Con dati in tempo reale e visualizzazioni interattive,
                    potrai esplorare le tendenze climatiche globali, monitorare
                    gli indicatori chiave e comprendere l'impatto delle azioni
                    umane sull'ambiente. Unisciti a noi nel combattere
                    il climate change attraverso la conoscenza e l'azione
                    informata.</p>
            </div>
        </header>
    )
}

export default HomeHeader
