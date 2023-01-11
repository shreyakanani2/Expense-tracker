import ChartBar from './CharBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximumValue = Math.max(...dataPointsValues);

    return <div className='chart'>
        {props.dataPoints.map((data) => <ChartBar key={data.label} value={data.value} maxValue={totalMaximumValue} label={data.label} />)}
    </div>
}

export default Chart;