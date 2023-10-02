import React from 'react'
import styles from './temperatureMain.module.css'
const TemperatureMain = () => {
    return (
        <main className={styles.temperatureMain}>
            <h2 className={styles.temperatureMainTitle}>
                Temperature
            </h2>
            <p className={styles.temperatureMainP}>
                L'innalzamento delle temperature globali
                è principalmente dovuto all'aumento delle
                concentrazioni di <strong>gas serra nell'atmosfera</strong>,
                causato dalle attività umane. La <strong>combustione
                    di combustibili fossili</strong> come carbone, petrolio
                e gas naturale per la <strong>produzione di energia e
                    il trasporto</strong> è la fonte principale
                di queste emissioni.
                La deforestazione  ha ulteriormente
                <strong> aggravato il problema</strong>,
                riducendo la capacità della
                Terra di assorbire il biossido di carbonio
                attraverso la <strong>fotosintesi delle piante</strong>. Pratiche
                agricole intensive, come <strong> l'uso eccessivo di
                    fertilizzanti</strong>, contribuiscono alle emissioni di
                altri gas serra come il protossido di azoto.
                <strong> Processi industriali</strong>, come la produzione di
                acciaio e cemento, generano ulteriori emissioni di CO2.
                Questo aumento dei gas serra crea un significativo
                effetto serra, causando <strong>eventi climatici estremi</strong>,
                innalzamento del livello del mare e impatti
                negativi sull'ambiente e sulla vita sulla Terra.
            </p>
        </main>
    )
}

export default TemperatureMain
