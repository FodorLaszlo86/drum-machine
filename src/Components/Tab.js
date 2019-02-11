import React from 'react';

const Tab = props => {
    let { tabSound, audioPlayOnClick, loudness } = props;
    console.log('loudness from Tab', loudness);
    return (
        <div className='drum-pad' id={ tabSound.name } onClick={ audioPlayOnClick }>
            {  props.title }
            <audio 
                src={ tabSound.url }
                id={ props.id } 
                className='clip' 
                volume={ .2 } 
                type='audio/mp3'
                autoPlay={ false }
                loop={ false } 
            />
        </div>
    )
}

export default Tab;