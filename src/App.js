import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import './App.css';
import Male from './components/Male/Male';
import Female from './components/Female/Female';
import Table from './components/Table/Table';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class App extends Component {
  render () {
    return (
      <div>
        <div className="App">
          <ReactFC {...Male} />
          <ReactFC {...Female} />
        </div>
        <Table />
      </div>
    );
  }
}

export default App;
