import React, { Component } from 'react';
import DrumPad from './DrumPad';
import Display from './Display';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeSound: '',
      powerOn: false,
      tabNames: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
      bankOne: [
          {
            trigger: 'q',
            name: 'Heater-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' 
          },

          {
            trigger: 'w',
            name: 'Heater-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' 
          },

          {
            trigger: 'e',
            name: 'Heater-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' 
          },

          {
            trigger: 'a',
            name: 'Heater-4',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' 
          },

          {
            trigger: 's',
            name: 'Heater-6',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' 
          },

          {
            trigger: 'd',
            name: 'Kick-n-Hat',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' 
          },

          {
            trigger: 'z',
            name: 'DSC-Oh',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' 
          },

          {
            trigger: 'x',
            name: 'PR4-Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' 
          },

          {
            trigger: 'c',
            name: 'Cev-H2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' 
          },
      ]
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
