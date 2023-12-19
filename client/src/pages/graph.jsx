import React from 'react';
import styles from "./graph.module.css";
import Chart from 'react-apexcharts';

const BarGraph = () => {
  const options = {
    chart: {
      id: 'bar-chart',
    },
    xaxis: {
      categories: ['Siding A'],
    },
  };

  const series = [
    {
      name: 'Weight (Tones)',
      data: [102],
    },
  ];

  return (
    <div className={styles.graphcontainer}>
      <h2>Amount of Coal</h2>
      <Chart options={options} series={series} type="bar" height={350} width={50} />
    </div>
  );
};
export default BarGraph;
