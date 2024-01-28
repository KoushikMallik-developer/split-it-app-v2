import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const GroupChart = () => {

    // Sample data for a bar chart
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Koushik',
                data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Sourav',
                data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Animesh',
                data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
                backgroundColor: 'rgba(47,224,61,0.49)',
            },
        ],
    };
    // Chart options
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Varanasi Ride Group Expense Records',
            },
        },
    };
    return (
        <div style={{maxHeight: "250px"}}>
            {/*<h6 className="text-center">Bar Chart Example</h6>*/}
            <Bar options={options} data={data}/>;
        </div>
    );
};

export default GroupChart;
