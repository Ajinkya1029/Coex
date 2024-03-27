import React from 'react';
import DynamicTable from './components/DynamicTable';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Dynamic Table App</h1>
      <DynamicTable />
    </div>
  );
};

export default App;
