import React from 'react'
import { Line } from "react-chartjs-2"
import { Chart as ChartJS,Filler,CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"


ChartJS.register(CategoryScale,  LinearScale, PointElement, LineElement, Title, Tooltip, Legend,Filler)

function LineGraph() {
    const options = {
        responsive:true,
      

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
                label: "Sales",
                data: [600, 1200 , 850, 700, 1500, 900, 1000],
                borderColor: "rgba(99, 102, 241, 0.6",
                
                tension: 0.4,
                fill: true, // Altını doldurur
                pointRadius: 4,
           backgroundColor: "rgba(99, 102, 241, 0.2)",
                pointBackgroundColor: "rgba(99, 102, 241, 0.6)",
                
            
            },
        ],


    }


    return (
        <Line  options={options} data={data} />
    )
}

export default LineGraph