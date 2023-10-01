import React from 'react'
import NitroHeader from './NitroHeader'
import NitroMain from './NitroMain'
import NitroChart from './NitroChart'
import HelmetHead from '../HelmetHead/HelmetHead';

const Nitrousoxide = () => {
    const helmetNitroDescription = "Scopri tutto sull'inquinamento da NO2, dalle sue origini alle conseguenze ambientali e sanitarie. Approfondiremo le strategie per mitigare le emissioni di NO2 e promuovere un'aria più pulita per tutti."
    const helmetNitroKeywords = "L'inquinamento da NO2, causato da processi industriali e veicoli, minaccia la salute umana e l'ambiente.Questo gas nocivo ha impatti negativi sulla salute respiratoria a lungo termine.   Affrontare il problema richiede tecnologie a basse emissioni, politiche di riduzione delle emissioni e sensibilizzazione pubblica. L'obiettivo è una comunità più sana e un ambiente meno inquinato. Scopri come contribuire al cambiamento leggendo il nostro articolo."
    return (
        <div>
            <HelmetHead
                titlePage={'NO2'}
                description={helmetNitroDescription}
                keywords={helmetNitroKeywords}
            />
            <NitroHeader />
            <NitroMain />
            <NitroChart />
        </div>
    )
}

export default Nitrousoxide
