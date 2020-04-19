import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div>
        <div className='card-container'>{props.character.name}</div>
    </div>
)