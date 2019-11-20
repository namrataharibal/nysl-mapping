import React from 'react';
import Map from './components/Map'
import CaseStudy from './components/CaseStudy'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> New York Soil Health </h1>
      <h2> Mapping Exemplary Soil Health Practices Across the New York State </h2>
      <h4> This mapping project is meant to showcase case studies of different farmers across
        New York State and the different farming practices they undertake to keep our soils healthy.
        The hope is to consolidate information about these practices to make it easier for interested stakeholders
        to find and access this information. </h4>
      <Map/>

    </div>
  );
}

export default App;

//
