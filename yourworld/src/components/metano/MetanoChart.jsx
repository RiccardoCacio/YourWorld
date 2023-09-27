import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Line, line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Spinner from '../loadingSpinner/Spinner';
import Error from '../error/Error';

const MetanoChart = () => {

    const [metanoData, setMetanoData] = useState([]);
    const [metanoIsCharge, setMetanoIsCharge] = useState(false);
    const [metanoIsAvaible, setMetanoIsAvaible] = useState(true);

    const metanoUrl = 'https://global-warming.org/api/methane-api'
    useEffect(() => {
        axios.get(metanoUrl)
            .then((response) => {
                let metanoApi = response.data.methane
                let metanoList = metanoApi.map(function (item) {
                    return {
                        date: parseFloat(item.date.split('.')),
                        trend: item.trend
                    }
                });
                setMetanoData(metanoList)
                setMetanoIsCharge(true)
            })
            .catch((error) => {
                console.log(error)
                setMetanoIsAvaible(false)
            })
    }, [])



    function metanoResultForYear(metanoDati) {
        const MetanoResult = {};

        for (const metanoDato of metanoDati) {
            const { date, trend } = metanoDato;

            if (!MetanoResult[date]) {
                MetanoResult[date] = { date, trend };
            }
        }
        return Object.values(MetanoResult);
    }

    const firstMetanoResultYear = metanoResultForYear(metanoData);
    console.log(firstMetanoResultYear)

    // Chart
    const data = {
        labels: firstMetanoResultYear.map(item => item.date),
        datasets: [
            {
                label: 'Metano',
                backgroundColor: '#f07727',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
                data: firstMetanoResultYear.map(item => item.trend),
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
        <> {metanoIsAvaible ?
            <div className='metanoChart'>
                <h2 className='metanoChartTitle'>Livelli di metano dal 1984 ad oggi</h2>
                {metanoIsCharge ? <Line data={data} options={options} />
                    : <Spinner />}
            </div>
            : <Error />
        }
        </>
    )
}

export default MetanoChart
