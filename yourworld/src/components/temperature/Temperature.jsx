import React from 'react'
import './temperature.css'
import TemperatureHeader from './TemperatureHeader'
import TemperatureMain from './TemperatureMain'
import TemperatureChart from './TemperatureChart'
const Temperature = () => {
    return (
        <div>
            <TemperatureHeader />
            <TemperatureMain />
            <TemperatureChart />
        </div>
    )
}

export default Temperature