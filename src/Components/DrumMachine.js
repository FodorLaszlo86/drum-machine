import React, { Component } from 'react';
import { soundKitOne, soundKitTwo } from './Sounds';
import DrumPad from './DrumPad';
import Display from './Display';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeSound: '',
      powerOn: false,
      activeKit: 'bankOne',
      tabNames: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
      bankOne: soundKitOne,
      bankTwo: soundKitTwo
    }
  }


  componentDidMount() {
    document.addEventListener('keypress', this.playSoundOnKeyPress);
  }

  playSound = (event) => {
    let { tabNames, bankOne } = this.state;
    let sound = event.target.childNodes[1];
    let index = tabNames.indexOf(event.target.childNodes[1].id);
    let soundName = bankOne[index].name;
    this.setState({
      activeSound: soundName
    })
    console.log(event.target)
    sound.play();
  }

  playSoundOnKeyPress = (event) => {
    console.log(event.keyCode);
  }

  render() {
    console.log(this.state.activeSound);
    return (
      <div className="App" id='drum-machine'>
        <header>
          <h1>FCC Drum Machine</h1>
        </header>
        <section id="drum-machine__body">
          <DrumPad 
              tabNames={ this.state.tabNames } 
              sounds={ this.state.bankOne } 
              playAudio={ this.playSound }
           />
          <Display soundName={this.state.activeSound}/>
        </section>
      </div>
    );
  }
}

export default DrumMachine;
