import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Line, line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Spinner from '../LoadingSpinner/Spinner';
import Error from '../Error/Error';

const TemperatureChart = () => {
    const temperatureUrl = 'https://global-warming.org/api/temperature-api'
    const [temperatureData, setTemperatureData] = useState([]);
    const [temperatureIsCharge, setTemperatureIsCharge] = useState(false);
    const [temperatureIsAvaible, setTemperatureIsAvaible] = useState(true);

    useEffect(() => {
        axios.get(temperatureUrl)
            .then((response) => {
                let temperatureApi = response.data.result
                let temperatureList = temperatureApi.map(function (item) {
                    return {
                        time: parseFloat(item.time.split('.')),
                        station: item.station
                    }
                });
                setTemperatureData(temperatureList)
                setTemperatureIsCharge(true)


            }
            )
            .catch((error) => {
                console.error('errore')
                setTemperatureIsAvaible(false)
            })
    }, [])

    function temperatureResultForYear(temperatureDati) {
        const TemperatureResult = {};

        for (const temperatureDato of temperatureDati) {
            const { time, station, land } = temperatureDato;

            if (!TemperatureResult[time]) {
                TemperatureResult[time] = { time, station, land };
            }
        }
        return Object.values(TemperatureResult);
    }

    const firstTemperatureResultYear = temperatureResultForYear(temperatureData);
    console.log(firstTemperatureResultYear)







    // Chart
    const data = {
        labels: firstTemperatureResultYear.map(item => item.time),
        datasets: [
            {
                label: 'Temperature',
                backgroundColor: '#f07727',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
                data: firstTemperatureResultYear.map(item => item.station),
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
                    text: 'Celsius',
                },
            },
        },
    };

    return (

        <> {temperatureIsAvaible ?
            <div className='temperatureChart'>
                <h2 className='temperatureChartTitle'>Anomalie della temperatura globale dal 1880 ad oggi</h2>
                {temperatureIsCharge ? <Line data={data} options={options} />
                    : <Spinner />}
            </div>
            : <Error />
        }
        </>



    );
};

export default TemperatureChart
