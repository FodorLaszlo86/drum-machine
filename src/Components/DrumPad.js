import React from 'react';
import Tab from './Tab';


const DrumPad = ({ tabNames, sounds, playAudio }) => {
    const tabs = tabNames.map((tab, index) => 
                    <Tab 
                        id={ tab } 
                        title={ tab } 
                        key={ index } 
                        tabSound={ sounds[index] } 
                        audioPlayOnClick={ playAudio } 
                    />
                );
    return (
        <div id='drum-pad'>
           { tabs }
        </div>
    )
}

export default DrumPad;