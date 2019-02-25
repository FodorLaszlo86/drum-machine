import React, { Component } from 'react';
import { soundKitOne, soundKitTwo } from './Sounds';
import DrumPad from './DrumPad';
import Display from './Display';
import PowerBtn from './PowerBtn';
import BankSwitch from './BankSwitch';
import VolumeCtrl from './VolumeCtrl';


class DrumMachine extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeSound: '',
      powerOn: false,
      activeKit: 'bankOne',
      tabNames: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
      bankOne: soundKitOne,
      bankTwo: soundKitTwo,
      volume: 0.62
    }
  }


  componentDidMount() {
    document.addEventListener('keypress', this.playSoundOnKeyPress);
  }

  togglePower = event => {
      this.setState({
        powerOn: !this.state.powerOn,
        activeSound: '',
        activeKit: 'bankOne'
      })
    event.target.classList.toggle('power-on')

    document.getElementById('bankOne').classList.add('bank__btn--active');

    if(this.state.powerOn) {
      document.getElementById('bankOne').classList.remove('bank__btn--active');
      document.getElementById('bankTwo').classList.remove('bank__btn--active');
    } 

  }


  changeSoundKits = event => {
    const useSoundKit = event.target.id;
    const switchButtons = Array.from(event.target.parentNode.children);
    // click on the other removes the class from the other and adds to the clicked one
    if(this.state.powerOn) {

      this.setState({
        activeKit: useSoundKit,
        activeSound: ''
      })

    
      switchButtons.map(btn => {
        if(this.state.activeKit === btn.id) {
          return btn.classList.add('bank__btn--active');
        } else {
          return btn.classList.remove('bank__btn--active');
        }
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

  changeVolume = (event) => {
    if(this.state.powerOn) {
      this.setState({
        volume: event.target.value
      })
    }
  }

  render() {

    let activeDrumPad;
    if(this.state.activeKit === 'bankOne') {
       activeDrumPad = <DrumPad 
                            tabNames={ this.state.tabNames } 
                            sounds={ this.state.bankOne } 
                            playAudio={ this.playSoundOnClick }
                            loudness={ this.state.volume } 
                      /> 
    } else {
      activeDrumPad = <DrumPad 
                            tabNames={ this.state.tabNames } 
                            sounds={ this.state.bankTwo } 
                            playAudio={ this.playSoundOnClick } 
                            loudness={ this.state.volume }
                      />
    }
    return (
      <div className="App" id='drum-machine'>

        <header id="app__header">
          <h1 id='app__title'>FCC Drum Machine</h1>
          <PowerBtn powerSwitch={ this.togglePower } />
        </header>

        <section id="drum-machine__body">
          { activeDrumPad }
          <div className='drum-machine__display'>
            <Display soundName={this.state.activeSound} activeKit={ this.state.activeKit } currentVol={ this.state.volume }/>
            <BankSwitch changeKit={ this.changeSoundKits } />
            <VolumeCtrl volumeCtrl={ this.changeVolume } volNow={ this.state.volume } />
          </div>
        </section>

      </div>
    );
  }
}

export default DrumMachine;
