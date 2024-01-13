import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from "chart.js";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const StackedBarChart = () => {
    const options = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        }
    }

    let data = {
        datasets: [
            {
                label: 'Employer',
                data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
                backgroundColor: "#0800a3"
            },
            {
                label: 'Employee',
                data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
                backgroundColor: "#4935ff"
            },
            {
                label: 'Total Interest',
                data: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
                backgroundColor: "#85afff"
            }
        ],
        labels: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]
    }

    return <Bar data={data} options={options} />
}

export default StackedBarChart