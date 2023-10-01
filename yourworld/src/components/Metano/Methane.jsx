import React from 'react'
import MethaneHeader from './MethaneHeader'
import MethaneMain from './MethaneMain'
import MethaneChart from './MethaneChart'
import HelmetHead from '../HelmetHead/HelmetHead';
const Methane = () => {
    const helmetMethaneDescription = " Scopri il potente impatto del metano sul cambiamento climatico e le sue fonti principali di emissione. Esplora soluzioni innovative per mitigare l'inquinamento da metano e come puoi contribuire a frenare il riscaldamento globale."
    const helmetMethaneKeywords = "Il metano, un potente gas serra, minaccia il nostro clima con un potenziale di riscaldamento globale molto superiore al CO2. Le principali fonti di emissione includono l'industria energetica e l'allevamento di bestiame. La cattura e l'utilizzo del metano offrono speranza per ridurre le emissioni, ma è essenziale un impegno su vasta scala da parte di governi, industrie e individui. La tua consapevolezza e partecipazione sono fondamentali per affrontare questa sfida climatica. Continua a leggere il nostro articolo per approfondire il tema e scoprire come contribuire alla lotta contro il cambiamento climatico."
    return (
        <div>
            <HelmetHead
                titlePage={'Metano'}
                description={helmetMethaneDescription}
                keywords={helmetMethaneKeywords}
            />
            <MethaneHeader />
            <MethaneMain />
            <MethaneChart />
        </div>
    )
}

export default Methane
