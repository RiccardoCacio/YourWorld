import React from 'react'
import HomeHeader from './HomeHeader'
import './home.css'
import HomeMain from './HomeMain'
import HelmetHead from '../HelmetHead/HelmetHead';
const Home = () => {

    const helmetHomeDescription = "Scopri gli impatti del cambiamento climatico sul nostro pianeta. Approfondisci le conseguenze dell'aumento della concentrazione di CO2 e N2O nell'atmosfera. Esplora il pericoloso scioglimento delle calotte polari e le sfide associate. Analizza il ruolo critico del metano come gas serra. Comprendi l'innalzamento delle temperature globali e le azioni necessarie per affrontare questa emergenza ambientale."
    const helmetHomeKeywords = "Il cambiamento climatico è una delle sfide più urgenti che l'umanità deve affrontare oggi. Alcuni dei principali contribuenti a questo fenomeno includono la concentrazione crescente di CO2 (biossido di carbonio) e N2O (protossido di azoto) nell'atmosfera. Questi gas serra catturano il calore solare nell'atmosfera, causando un aumento delle temperature globali e una serie di impatti negativi. Un altro aspetto critico del cambiamento climatico è lo scioglimento delle calotte polari. Le masse di ghiaccio dell'Artico e dell'Antartide si stanno ritirando a un ritmo allarmante, contribuendo all'innalzamento del livello del mare e minacciando gli ecosistemi unici delle regioni polari. Il metano, un potente gas serra, è spesso sottovalutato ma gioca un ruolo cruciale. Le fonti di emissione di metano includono l'industria energetica, l'allevamento di bestiame e la decomposizione dei rifiuti. Ridurre le emissioni di metano è fondamentale per mitigare il cambiamento climatico. Infine, l'innalzamento delle temperature globali sta causando eventi meteorologici estremi, come ondate di calore, siccità e tempeste più intense. Questi impatti sono evidenti in tutto il mondo e richiedono un'azione immediata. Unisciti a noi mentre esploriamo questi argomenti chiave e scopri come puoi contribuire alla lotta contro il cambiamento climatico. Insieme possiamo fare la differenza e proteggere il nostro pianeta per le future generazioni."

    return (
        <div>
            <HelmetHead
                titlePage={'Home'}
                description={helmetHomeDescription}
                keywords={helmetHomeKeywords}
            />
            <HomeHeader />
            <HomeMain />
        </div>
    )
}

export default Home
