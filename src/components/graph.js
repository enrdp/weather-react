import React, { useEffect , useState} from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const WeatherGraph = (props) => {
  const {cityComp, cityComp2, nameCity2, nameCity} = props
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const labels = ['Temperature'];
  
  const data = {
    labels,
    datasets: [
      {
        label: nameCity,
        data: [cityComp],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: nameCity2,
        data: [cityComp2],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };



  return (
    <div>
              <Bar
                data={data}
                options={options}
                />
  </div>
  )
}

export default WeatherGraph