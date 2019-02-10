import React from 'react';

const BankSwitch = ({ changeKit }) => {
    return (
        <div id="bank-switch-panel">

            <button
                 id='bankOne' 
                 className='bank-btn'
                 onClick={ changeKit }
                >
                Bank One
            </button>

            <button
                id='bankTwo' 
                className='bank-btn'
                onClick={ changeKit }
                >
                Bank Two
            </button>

        </div>
    )
}

export default BankSwitch;