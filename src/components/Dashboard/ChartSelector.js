import React, { useState } from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import './ChartStyles.css'; 

function ChartSelector() {
  const [selectedChart, setSelectedChart] = useState('line');

  const renderChart = () => {
    switch (selectedChart) {
      case 'line':
        return <LineChart />;
      case 'bar':
        return <BarChart />;
      case 'pie':
        return <PieChart />;
      case 'doughnut':
        return <DoughnutChart />;
      default:
        return <LineChart />;
    }
  };

  return (
    <div>
      
      <div>
        <button onClick={() => setSelectedChart('line')}>Line Chart</button>
        <button onClick={() => setSelectedChart('bar')}>Bar Chart</button>
        <button onClick={() => setSelectedChart('pie')}>Pie Chart</button>
        <button onClick={() => setSelectedChart('doughnut')}>Doughnut Chart</button>
      </div>
      <div>
        {renderChart()}
      </div>
    </div>
  );
}

export default ChartSelector;