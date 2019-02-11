import React from 'react';

const VolumeCtrl = (props) => {
    return (
        <div>
            <input type='range' min='0' max='1' step='0.01' onChange={ props.volume } value={props.volNow} />
        </div>
    )
}

export default VolumeCtrl;