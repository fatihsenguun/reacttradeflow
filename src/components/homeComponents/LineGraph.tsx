import React from 'react'
import { Line } from "react-chartjs-2"
import { Chart as ChartJS,Filler,CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"

interface ChartDataPoint {
  name: string;  // Tarih (X ekseni)
  sales: number; // Miktar (Y ekseni)
}
interface LineGraphProps {
  chartData: ChartDataPoint[];
}

ChartJS.register(CategoryScale,  LinearScale, PointElement, LineElement, Title, Tooltip, Legend,Filler)

function LineGraph({chartData }:LineGraphProps){
    const options = {
        responsive:true,
      

    }
    if (!chartData ) {
        return <div className="text-slate-400 text-center py-20">Loading...</div>;
    }
    const data = {
        labels: chartData.map((item:ChartDataPoint) =>item.name),
        datasets: [
            {
                label: "Sales",
                data: chartData.map((item:ChartDataPoint) => item.sales),
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