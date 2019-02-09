import React, { Component } from 'react';
import { soundKitOne, soundKitTwo } from './Sounds';
import DrumPad from './DrumPad';
import Display from './Display';
import PowerBtn from './PowerBtn';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeSound: '',
      powerOn: true,
      activeKit: 'bankOne',
      tabNames: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
      bankOne: soundKitOne,
      bankTwo: soundKitTwo
    }
  }


  componentDidMount() {
    document.addEventListener('keypress', this.playSoundOnKeyPress);
    console.log(this.state.powerOn,  'componentDidMount')
  }

  togglePower = () => {
      this.setState({
        powerOn: !this.state.powerOn
      })
      console.log(this.state.powerOn);
  }

  playSoundOnClick = (event) => {
    if(this.state.powerOn) {
      let { tabNames, bankOne } = this.state;
      let sound = event.target.childNodes[1];
      let index = tabNames.indexOf(sound.id);
      let soundName = bankOne[index].name;

      this.setState({
        activeSound: soundName
      })

      sound.play();
      }
  }

  playSoundOnKeyPress = (event) => {
    if(this.state.powerOn) {
      let { tabNames, bankOne } = this.state;
      const pressedChar = String.fromCharCode(event.keyCode).toUpperCase();

      // get the audio element to trigger with the keypress
      const sound = document.getElementById(`${pressedChar}`);
      // get the index of the pressed element
      const index = tabNames.indexOf(sound.id);
      // get the name of the pressed sound
      let soundName = bankOne[index].name;
      // update state with the currently pressed sound's name
      this.setState({
        activeSound: soundName
      })
      
      // play sound if exist i.e sound is not null
      if(sound) {
        sound.play();
      }
    }
  }

  render() {
    return (
      <div className="App" id='drum-machine'>
        <header>
          <h1>FCC Drum Machine</h1>
          <PowerBtn powerSwitch={ this.togglePower } />
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
