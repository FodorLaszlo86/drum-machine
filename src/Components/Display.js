import React from 'react';

const Display = ({ soundName, activeKit }) => {
    return (
        <div id='display'>
            <div id='activekit-display'>{ activeKit }</div>
            <div id="display-sound-name">{ soundName }</div>
        </div>
    )
}

export default Display;