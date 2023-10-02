import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Line, line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Spinner from '../../LoadingSpinner/Spinner';
import Error from '../../Error/Error';
import styles from './methaneChart.module.css'
const MethaneChart = () => {

    const [methaneData, setMethaneData] = useState([]);
    const [methaneIsCharge, setMethaneIsCharge] = useState(false);
    const [methaneIsAvaible, setMethaneIsAvaible] = useState(true);

    const methaneUrl = 'https://global-warming.org/api/methane-api'
    useEffect(() => {
        axios.get(methaneUrl)
            .then((response) => {
                let methaneApi = response.data.methane
                let methaneList = methaneApi.map(function (item) {
                    return {
                        date: parseFloat(item.date.split('.')),
                        trend: item.trend
                    }
                });
                setMethaneData(methaneList)
                setMethaneIsCharge(true)
            })
            .catch((error) => {
                console.log(error)
                setMethaneIsAvaible(false)
            })
    }, [])



    function methaneResultForYear(methaneDati) {
        const MethaneResult = {};

        for (const methaneDato of methaneDati) {
            const { date, trend } = methaneDato;

            if (!MethaneResult[date]) {
                MethaneResult[date] = { date, trend };
            }
        }
        return Object.values(MethaneResult);
    }

    const firstMethaneResultYear = methaneResultForYear(methaneData);
    console.log(firstMethaneResultYear)

    // Chart
    const data = {
        labels: firstMethaneResultYear.map(item => item.date),
        datasets: [
            {
                label: 'Metano',
                backgroundColor: '#f07727',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
                data: firstMethaneResultYear.map(item => item.trend),
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
        <> {methaneIsAvaible ?
            <div className={styles.methaneChart}>
                <h2 className={styles.methaneChartTitle}>Livelli di metano dal 1984 ad oggi</h2>
                {methaneIsCharge ? <Line data={data} options={options} />
                    : <Spinner />}
            </div>
            : <Error />
        }
        </>
    )
}

export default MethaneChart
