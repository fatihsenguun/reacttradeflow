import React from 'react'
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);

function PieChart() {
      const data = {
        labels: [
            "Man",
            "Women"
        ],
        datasets: [
            {
                label: "Sales",
                data: [2300, 1100 ],
                borderColor: [
                    "rgba(255, 0, 55, 0.2)",
                    "rgba(23, 23, 23, 0.2)",
                ],
                hoverOffset:4,
            },
        ],


    }

    const options = {};

    return (
        <Pie options={options} data={data} />
    )
}

export default PieChart