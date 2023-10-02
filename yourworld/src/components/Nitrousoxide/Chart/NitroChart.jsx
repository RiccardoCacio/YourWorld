import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Line, line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Spinner from '../../LoadingSpinner/Spinner';
import Error from '../../Error/Error';
import styles from './nitroChart.module.css'

const NitroChart = () => {

    const nitroUrl = 'https://global-warming.org/api/nitrous-oxide-api'
    const [nitroData, setNitroData] = useState([]);
    const [nitroIsCharge, setNitroIsCharge] = useState(false);
    const [nitroIsAvaible, setNitroIsAvaible] = useState(true);

    useEffect(() => {
        axios.get(nitroUrl)
            .then((response) => {
                let nitroApi = response.data.nitrous
                let nitroList = nitroApi.map(function (item) {
                    return {
                        date: parseFloat(item.date.split('.')),
                        trend: item.trend
                    }
                })
                setNitroData(nitroList)
                setNitroIsCharge(true)
            })
            .catch((error) => {
                console.log('errore')
                setNitroIsAvaible(false)
            })
    }, [])

    function nitroResultForYear(nitroDati) {
        const NitroResult = {};

        for (const nitroDato of nitroDati) {
            const { date, trend } = nitroDato;

            if (!NitroResult[date]) {
                NitroResult[date] = { date, trend };
            }
        }
        return Object.values(NitroResult);
    }

    const firstNitroResultYear = nitroResultForYear(nitroData);


    // Chart
    const data = {
        labels: firstNitroResultYear.map(item => item.date),
        datasets: [
            {
                label: 'No2',
                backgroundColor: '#f07727',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
                data: firstNitroResultYear.map(item => item.trend),
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
                    text: 'Frazione molare di (No2)',
                },
            },
        },
    };


    return (
        <> {nitroIsAvaible ?
            <div className={styles.nitroChart}>
                <h2 className={styles.nitroChartTitle}>Anomalie della temperatura globale dal 1880 ad oggi</h2>
                {nitroIsCharge ? <Line data={data} options={options} />
                    : <Spinner />}
            </div>
            : <Error />
        }
        </>
    )
}

export default NitroChart
