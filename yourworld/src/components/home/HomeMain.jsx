import React from 'react'
import styles from './home.module.css'
const HomeMain = () => {
    return (
        <main className={styles.homeMain}>
            <h2 className={styles.homeMainTitle}>
                Cosa è il riscaldamento globale?
            </h2>

            <p className={styles.homeMainP}>
                Il <strong> surriscaldamento globale</strong> è l'aumento
                graduale delle temperature sulla Terra,
                causato principalmente dalle emissioni
                di gas serra dovute all'attività umana.
                Questo fenomeno <strong>provoca impatti ambientali
                    gravi</strong>, tra cui l'innalzamento del livello
                del mare, eventi meteorologici estremi più
                intensi e alterazioni negli ecosistemi.
                La comprensione e la mitigazione del
                surriscaldamento globale sono essenziali per <strong>preservare il nostro pianeta</strong> per le generazioni future.
            </p>



            <h2 className={styles.homeMainTitle}>Da cosa è causato?</h2>

            <p className={styles.homeMainP}>
                Il surriscaldamento globale è principalmente
                causato dall'aumento delle <strong>emissioni di gas
                    serra nell'atmosfera</strong> , il quale è dovuto
                principalmente all'attività umana, come
                la combustione dei combustibili fossili
                e la deforestazione. Questi gas serra
                intrappolano il calore del sole nell'atmosfera,
                <strong> causando l'innalzamento graduale delle temperature
                    sulla Terra.</strong>
            </p>

            <h2 className={styles.homeMainTitle}>Ci sono soluzioni?</h2>

            <p className={styles.homeMainP}>
                <strong>Esistono diverse</strong> strategie per mitigare il
                surriscaldamento globale. Una delle principali
                è la transizione verso <strong>fonti di energia più
                    pulite e rinnovabili</strong>, come il solare e
                l'eolico, riducendo così le emissioni del
                settore energetico. Inoltre, pratiche agricole
                sostenibili e <strong>riduzione dello spreco
                    alimentare</strong> possono contribuire a ridurre
                le emissioni legate all'agricoltura.
                La <strong>riforestazione e la gestione sostenibile
                    delle foreste</strong> possono contribuire a
                catturare il carbonio atmosferico.
                Inoltre, la <strong>sensibilizzazione e l'impegno
                    delle comunità</strong> e delle nazioni sono
                essenziali per affrontare con successo
                questa <strong>sfida globale</strong>.
            </p>
        </main>
    )
}

export default HomeMain
