import React from 'react';

const Display = ({ soundName, activeKit }) => {
    return (
        <div id='display' className='display'>
            <div class='display__secondary'>
                <div id='activekit-display' className='display__activekit'>{ activeKit }</div>
                <div className='display__volume'>Vol: 32</div>
            </div>
            <div id="display-sound-name" className='display__primary'>{ soundName }</div>
        </div>
    )
}

export default Display;