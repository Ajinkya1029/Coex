import React from 'react';

import styles from "./mining.module.css";
import Chart from 'react-apexcharts';

function BarGraph () {
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
      <h2 className={styles.graphheading}>Amount of Coal</h2>
      <Chart options={options} series={series} type="bar" height={350} width={200} />
    </div>
  );
};
export default BarGraph;