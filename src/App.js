import React from 'react';
import Title from "./components/Title";
import EmployeeTable from "./components/EmployeeTable";

import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <br></br>
      <EmployeeTable />
    </div>
  );
}

export default App;
