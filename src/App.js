import React, { Component } from 'react';
import './App.css';
import DrumMachine from './components/DrumMachine';
import Space from './components/Space';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header id="main-header">Drum Machine</header>
        <Space marginTop="6rem"></Space>
        <DrumMachine></DrumMachine>
      </div>
    );
    }
}




export default App;
