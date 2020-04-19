import React from 'react';
import './card.styles.css'



export const Card = (props) => (
    <div className='card-container'>
        <img alt='character' src={props.character.link} />
        <h1>{props.character.name}</h1>
    </div>
)