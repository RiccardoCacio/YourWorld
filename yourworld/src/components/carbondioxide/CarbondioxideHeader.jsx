import React from 'react'
import styles from './carbondioxide.module.css'
const CarbondioxideHeader = () => {
    return (
        <header className={styles.headerCarbon}>
            <div className={styles.headerCarbonBox}>
                <h4 className={styles.headerCarbonSubTitle}>
                    Il Gas Vitale ed il Suo Impatto Sul Clima
                </h4>
                <p className={styles.headerCarbonP}>
                    La CO2, o anidride carbonica,
                    è un gas vitale per la vita sulla Terra,
                    ma le sue crescenti emissioni dovute all'attività
                    umana stanno causando cambiamenti climatici globali.
                    È cruciale affrontare questa sfida per proteggere
                    il nostro pianeta.
                </p>
            </div>
        </header>
    )
}

export default CarbondioxideHeader
