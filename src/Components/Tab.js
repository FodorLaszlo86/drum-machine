import React from 'react';

const Tab = props => {
    let { tabSound, audioPlayOnClick } = props;
    return (
        <div className='drum-pad' id={ tabSound.name } onClick={ audioPlayOnClick }>
            {  props.title }
            <audio 
                src={ tabSound.url }
                id={ props.id } 
                className='clip' 
                volume={ 1 } 
                type='audio/mp3'
                autoPlay={ false }
                loop={ false } 
            />
        </div>
    )
}

export default Tab;