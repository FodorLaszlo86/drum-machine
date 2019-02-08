import React from 'react';
import Tab from './Tab';


const DrumPad = ({ tabNames }) => {
    const tabs = tabNames.map((tab, index) => <Tab id={ tab } title={ tab } key={ index } />);
    return (
        <div id='drum-pad'>
           { tabs }
        </div>
    )
}

export default DrumPad;