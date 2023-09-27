import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Line, line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Spinner from '../loadingSpinner/Spinner';
import Error from '../error/Error';

const GhiaccioChart = () => {
    const ghiaccioUrl = 'https://global-warming.org/api/arctic-api';
    const [ghiaccioData, setGhiaccioData] = useState([]);
    const [ghiaccioIsCharge, setGhiaccioIsCharge] = useState(false);
    const [ghiaccioIsAvaible, setGhiaccioIsAvaible] = useState(true);

    useEffect(() => {
        axios.get(ghiaccioUrl)
            .then((response) => {
                let ghiaccioApi = response.data.arcticData;
                let ghiaccioList = ghiaccioApi.map(function (item) {
                    return {
                        year: item.year,
                        extent: item.extent,
                        area: item.area,
                    }
                })
                setGhiaccioData(ghiaccioList)
                setGhiaccioIsCharge(true)
                console.log(ghiaccioData)
            })
            .catch((error) => {
                console.log(error)
                setGhiaccioIsAvaible(false)
            })
    }, []);

    // Chart
    const data = {
        labels: ghiaccioData.map(item => item.year),
        datasets: [
            {
                label: 'Extent',
                backgroundColor: '#4892ff',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
                data: ghiaccioData.map(item => item.extent),
            },
            {
                label: 'Area',
                backgroundColor: '#3266b2',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
                data: ghiaccioData.map(item => item.area),
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
        <> {ghiaccioIsAvaible ?
            <div className='ghiaccioChart'>
                <h2 className='ghiaccioChartTitle'>Calotte polari sciolte</h2>
                {ghiaccioIsCharge ? <Line data={data} options={options} />
                    : <Spinner />}
            </div>
            : <Error />
        }
        </>
    )
}

export default GhiaccioChart
