import React from 'react';
import './Card.css';

function Card({ card, onCardClick, isFlipped, isMatched }) {
    return (
        <div
            className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
            onClick={() => onCardClick(card.id)}
        >
            <div className="card-content">
                {isFlipped || isMatched ? card.value : '?'}
            </div>
        </div>
    );
}
export default Card;
