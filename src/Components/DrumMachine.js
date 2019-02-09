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

  playSoundOnClick = (event) => {

    let { tabNames, bankOne } = this.state;
    let sound = event.target.childNodes[1];
    let index = tabNames.indexOf(event.target.childNodes[1].id);
    let soundName = bankOne[index].name;

    this.setState({
      activeSound: soundName
    })

    sound.play();
  }

  playSoundOnKeyPress = (event) => {
    let { tabNames, bankOne } = this.state;
    const pressedChar = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(pressedChar);
    // get the audio element to trigger with the keypress
    const sound = document.getElementById(`${pressedChar}`);
    const index = tabNames.indexOf(sound.id);
    let soundName = bankOne[index].name;

    this.setState({
      activeSound: soundName
    })
    console.log(sound);
    // play sound
    if(sound) {
      sound.play();
    }
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
              playAudio={ this.playSoundOnClick }
           />
          <Display soundName={this.state.activeSound} />
        </section>
      </div>
    );
  }
}

export default DrumMachine;
