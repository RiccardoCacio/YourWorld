import React from 'react'
import './temperature.css'
import TemperatureHeader from './TemperatureHeader'
import TemperatureMain from './TemperatureMain'
import TemperatureChart from './TemperatureChart'
import HelmetHead from '../HelmetHead/HelmetHead';
const Temperature = () => {
    const helmetTemperatureDescription = "Scopri come l'innalzamento delle temperature globali è un effetto chiave dei cambiamenti climatici e le conseguenze che comporta per il nostro pianeta. Esplora le cause dell'innalzamento delle temperature, le sue implicazioni per l'ambiente e la vita sulla Terra, e le azioni necessarie per affrontare questa sfida."
    const helmetTemperatureKeywords = "L'innalzamento delle temperature globali, causato dalle emissioni di gas serra umani, ha gravi conseguenze, tra cui l'aumento del livello del mare e eventi climatici estremi. Questo fenomeno è principalmente causato dalla combustione di combustibili fossili e dalla deforestazione, che intrappolano il calore nell'atmosfera. Ciò si traduce nel disgelo dei ghiacciai, nell'acidificazione degli oceani e nella perdita di habitat. Affrontare questo problema richiede una transizione verso energie pulite, pratiche agricole sostenibili e consapevolezza ambientale su scala globale, coinvolgendo governi, industrie e individui. Scopri come puoi contribuire alla lotta contro il cambiamento climatico nel nostro articolo."
    return (
        <div>
            <HelmetHead
                titlePage={'Temperature'}
                description={helmetTemperatureDescription}
                keywords={helmetTemperatureKeywords}
            />
            <TemperatureHeader />
            <TemperatureMain />
            <TemperatureChart />
        </div>
    )
}

export default Temperature
