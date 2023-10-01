import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Line, line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Spinner from '../LoadingSpinner/Spinner';
import Error from '../Error/Error';
import styles from './carbondioxide.module.css'
const CarbondioxideChart = () => {

    const carbonUrl = 'https://global-warming.org/api/co2-api'
    const [coData, setCoData] = useState([])
    const [carbonIsCharge, setCarbonIsCharge] = useState(false)
    const [carbonIsAvaible, setCarbonIsAvaible] = useState(true)

    useEffect(() => {
        axios.get(carbonUrl)
            .then((response) => {
                let co2Data = response.data.co2
                let effCo = co2Data.map(item => item)
                setCoData(effCo)
                setCarbonIsCharge(true)

            }
            )
            .catch((error) => {
                console.error('errore')
                setCarbonIsAvaible(false)
            })
    }, [])

    function carbonresultForYear(carbonDati) {
        const carbonResult = {};

        for (const carbonDato of carbonDati) {
            const { year } = carbonDato;

            if (!carbonResult[year]) {
                carbonResult[year] = carbonDato;
            }
        }

        return Object.values(carbonResult);
    }

    const firstCarbonResultYear = carbonresultForYear(coData);

    // 
    console.log(carbonIsAvaible)


    // Chart
    const data = {
        labels: firstCarbonResultYear.map(item => item.year),
        datasets: [
            {
                label: 'Co2',
                backgroundColor: '#f07727',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
                data: firstCarbonResultYear.map(item => item.trend),
            },
        ],
    };
    const options = {
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'Anno',
                },
            },
            y: {
                title: {
                    type: 'category',
                    display: true,
                    text: 'Parts per million (PPM)',
                },
            },
        },
    };

    return (

        <> {carbonIsAvaible ?
            <div className={styles.carbonChart}>
                <h2 className={styles.carbonChartTitle}>Livelli di Co2 dal 2013 ad oggi</h2>
                {carbonIsCharge ? <Line data={data} options={options} />
                    : <Spinner />}
            </div>
            : <Error />
        }
        </>
    );
};

export default CarbondioxideChart;
