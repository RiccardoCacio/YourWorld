import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Line, line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Spinner from '../LoadingSpinner/Spinner';
import Error from '../Error/Error';
import styles from './ice.module.css'
const IceChart = () => {
    const iceUrl = 'https://global-warming.org/api/arctic-api';
    const [iceData, setIceData] = useState([]);
    const [iceIsCharge, setIceIsCharge] = useState(false);
    const [iceIsAvaible, setIceIsAvaible] = useState(true);

    useEffect(() => {
        axios.get(iceUrl)
            .then((response) => {
                let iceApi = response.data.arcticData;
                let iceList = iceApi.map(function (item) {
                    return {
                        year: item.year,
                        extent: item.extent,
                        area: item.area,
                    }
                })
                setIceData(iceList)
                setIceIsCharge(true)
                console.log(iceData)
            })
            .catch((error) => {
                console.log(error)
                setIceIsAvaible(false)
            })
    }, []);

    // Chart
    const data = {
        labels: iceData.map(item => item.year),
        datasets: [
            {
                label: 'Extent',
                backgroundColor: '#4892ff',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
                data: iceData.map(item => item.extent),
            },
            {
                label: 'Area',
                backgroundColor: '#3266b2',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
                data: iceData.map(item => item.area),
            },
        ],
    };
    const options = {
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'anno',
                },
            },
            y: {
                title: {
                    type: 'category',
                    display: true,
                    text: 'Millioni di km2',
                },
            },
        },
    };

    return (
        <> {iceIsAvaible ?
            <div className={styles.iceChart}>
                <h2 className={styles.iceChartTitle}>Calotte polari sciolte</h2>
                {iceIsCharge ? <Line data={data} options={options} />
                    : <Spinner />}
            </div>
            : <Error />
        }
        </>
    )
}

export default IceChart
