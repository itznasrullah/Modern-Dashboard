import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const DoughnutChart = ({ chartData, title }) => {
    const options = {
        responsive: true,
    }

    let data = {
        datasets: [{
            data: chartData,
            backgroundColor: ["#22d6aa", "#d3f7ee"]
        }]
    }

    const plugins = [{
        beforeDraw: function(chart) {
            var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
            ctx.restore();
            ctx.font = "600 0.8rem sans-serif";
            ctx.textBaseline = "top";
            var text = Math.max(chartData[0], chartData[1]) + "%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        } 
      }]

    return (
        <div>
            <Doughnut data={data} options={options} plugins={plugins} />
            <span>{title}</span>
        </div>
    )
}

export default DoughnutChart