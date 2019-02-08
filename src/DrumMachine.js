import React, { Component } from 'react';
import DrumPad from './Components/DrumPad';
import Display from './Components/Display';
import './App.css';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      powerOn: false,
      padNames: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    }
  }

  render() {
    return (
      <div className="App" id='drum-machine'>
        <header>
          <h1>FCC Drum Machine</h1>
        </header>
       <DrumPad />
       <Display />
      </div>
    );
  }
}

export default DrumMachine;
