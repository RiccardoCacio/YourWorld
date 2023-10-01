import React from 'react'
import CarbondioxideHeader from './CarbondioxideHeader'
import CarbondioxideMain from './CarbondioxideMain'
import CarbondioxideChart from './CarbondioxideChart'
import HelmetHead from '../HelmetHead/HelmetHead';
const Carbondioxide = () => {

    const helmetCarbonDioxideDescription = "Scopri come il biossido di carbonio (CO2) sta contribuendo al cambiamento climatico e quali azioni possiamo intraprendere per affrontare questa sfida globale. Esplora le fonti principali di emissioni di CO2 e le soluzioni sostenibili per mitigare l'inquinamento atmosferico."
    const helmetCarbonDioxideKeywords = "L'inquinamento da CO2, causato principalmente dalle attività umane come la combustione di combustibili fossili, è una grave minaccia per il nostro pianeta. Questo gas serra è responsabile dell'innalzamento delle temperature globali e dei cambiamenti climatici. Tuttavia, esistono soluzioni sostenibili, tra cui l'adozione di energie rinnovabili e l'efficienza energetica, che possono contribuire a ridurre le emissioni di CO2. La collaborazione tra governi, industrie e individui è essenziale per affrontare questo problema e proteggere il nostro pianeta per le future generazioni. Scopri di più nell'articolo su come fare la differenza nella lotta contro il cambiamento climatico."
    return (
        <div>
            <HelmetHead
                titlePage={'Co2'}
                description={helmetCarbonDioxideDescription}
                keywords={helmetCarbonDioxideKeywords}
            />
            <CarbondioxideHeader />
            <CarbondioxideMain />
            <CarbondioxideChart />

        </div>
    )
}

export default Carbondioxide
