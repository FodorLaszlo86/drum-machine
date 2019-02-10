import React, { Component } from 'react';
import { soundKitOne, soundKitTwo } from './Sounds';
import DrumPad from './DrumPad';
import Display from './Display';
import PowerBtn from './PowerBtn';
import BankSwitch from './BankSwitch';

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
  }

  togglePower = () => {
      this.setState({
        powerOn: !this.state.powerOn,
        activeSound: ''
      })
  }

  changeSoundKits = (event) => {
    if(this.state.powerOn) {
      const useSoundKit = event.target.id;
      this.setState({
        activeKit: useSoundKit,
        activeSound: ''
      })
    }
  }

  playSoundOnClick = (event) => {
    if(this.state.powerOn) {
      let { tabNames, bankOne, bankTwo, activeKit } = this.state;
      let sound = event.target.childNodes[1];
      let index = tabNames.indexOf(sound.id);
      let soundName;

      if(activeKit === 'bankOne') {
        soundName = bankOne[index].name;
      } else {
        soundName = bankTwo[index].name;
      }

      this.setState({
        activeSound: soundName
      })

      sound.play();
      }
  }

  playSoundOnKeyPress = (event) => {
    if(this.state.powerOn) {
      let { tabNames, bankOne, bankTwo, activeKit } = this.state;
      const pressedChar = String.fromCharCode(event.keyCode).toUpperCase();

      // get the audio element to trigger with the keypress
      const sound = document.getElementById(`${pressedChar}`);
      console.log(sound);
      // get the index of the pressed element
      if(sound) {
        const index = tabNames.indexOf(sound.id);
        // get the name of the pressed sound
        let soundName;
        // update state with the currently pressed sound's name
        if(activeKit === 'bankOne') {
          soundName = bankOne[index].name;
        } else {
          soundName = bankTwo[index].name;
        }
        
        this.setState({
          activeSound: soundName
        })
        
        // play sound if exist i.e sound is not null
          sound.play();
      }
    }
  }

  render() {

    let activeDrumPad;
    if(this.state.activeKit === 'bankOne') {
       activeDrumPad = <DrumPad tabNames={ this.state.tabNames } sounds={ this.state.bankOne } playAudio={ this.playSoundOnClick } /> 
    } else {
      activeDrumPad = <DrumPad tabNames={ this.state.tabNames } sounds={ this.state.bankTwo } playAudio={ this.playSoundOnClick } />
    }
    return (
      <div className="App" id='drum-machine'>
        <header>
          <h1>FCC Drum Machine</h1>
          <PowerBtn powerSwitch={ this.togglePower } />
        </header>
        <section id="drum-machine__body">
          { activeDrumPad }
          <Display soundName={this.state.activeSound} activeKit={ this.state.activeKit } />
          <BankSwitch changeKit={ this.changeSoundKits } />
        </section>
      </div>
    );
  }
}

export default DrumMachine;
