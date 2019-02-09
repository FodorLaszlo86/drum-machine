import React from 'react';

const Display = ({ soundName }) => {
    return (
        <div id='display'>
            <div id="display-sound-name">{ soundName }</div>
        </div>
    )
}

export default Display;