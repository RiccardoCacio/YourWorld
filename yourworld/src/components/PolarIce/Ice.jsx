import React from 'react'
import IceHeader from './IceHeader'
import IceMain from './IceMain'
import IceChart from './IceChart'
import './ice.css'
import HelmetHead from '../HelmetHead/HelmetHead';
const Icepolare = () => {
    const helmetIceDescription = " Scopri tutto sullo scioglimento della calotta polare del Polo Nord, dalle sue origini ai cambiamenti climatici e alle possibili soluzioni. Approfondiremo le strategie per rallentare il processo e preservare il nostro ambiente per le future generazioni."
    const helmetIceKeywords = "Lo scioglimento delle calotte polari del Polo Nord è un grave problema causato principalmente dall'innalzamento delle temperature globali dovuto alle emissioni di gas serra. Questo fenomeno ha impatti significativi, tra cui l'aumento del livello del mare, le modifiche nei modelli climatici globali e le minacce per la fauna artica. Per affrontare questa sfida, sono necessarie soluzioni sostenibili, come la riduzione delle emissioni di gas serra e la conservazione degli ecosistemi polari. La consapevolezza e l'azione sono fondamentali per contrastare lo scioglimento delle calotte polari e proteggere il nostro ambiente artico per le future generazioni."
    return (
        <div>
            <HelmetHead
                titlePage={'Ghiaccio Polare'}
                description={helmetIceDescription}
                keywords={helmetIceKeywords}
            />
            <IceHeader />
            <IceMain />
            <IceChart />
        </div>
    )
}

export default Icepolare
