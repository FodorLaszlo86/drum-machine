import React from 'react';

const BankSwitch = ({ changeKit }) => {
    return (
        <div className="bank-switch__panel">

            <button
                 id='bankOne' 
                 className='bank__btn'
                 onClick={ changeKit }
                >
                Bank One
            </button>

            <button
                id='bankTwo' 
                className='bank__btn bank__btn--inactive'
                onClick={ changeKit }
                >
                Bank Two
            </button>

        </div>
    )
}

export default BankSwitch;