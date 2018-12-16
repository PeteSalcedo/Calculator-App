import React from 'react';
import './ClearButton.css';

export const ClearButton = () => (
    <div className='clear-btn' onClick={props.handleClear}>
    {props.children}
    </div>
)