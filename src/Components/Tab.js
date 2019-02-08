import React from 'react';

const Tab = props => <div className='drum-pad'>
                        {  props.title }
                        <audio id={ props.id }>
                            <source src='' id={ props.id } />
                        </audio>
                    </div>

export default Tab;