import React from 'react'
import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

function LineGraph() {
    const options = {

    }
    const data = {
        labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        datasets: [
            {
                label: "Steps",
                data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
                borderColor: "rgb(75,192,192)",
            },
        ],


    }


    return (
        <Line options={options} data={data} />
    )
}

export default LineGraph