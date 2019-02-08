import React, { Component } from 'react';
import DrumPad from './DrumPad';
import Display from './Display';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      powerOn: false,
      tabNames: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    }
  }

  render() {
    return (
      <div className="App" id='drum-machine'>
        <header>
          <h1>FCC Drum Machine</h1>
        </header>
        <section id="drum-machine__body">
          <DrumPad tabNames={ this.state.tabNames } />
          <Display />
        </section>
      </div>
    );
  }
}

export default DrumMachine;
