import React from 'react';
import './Card.css';
import CardContent from './CardContent';
function Card({ card, onCardClick, isFlipped, isMatched }) {
    return (
        <div
            className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
            onClick={() => onCardClick(card.id)}
        >
            <CardContent value={card.value} isFlipped={isFlipped} isMatched={isMatched} />
        </div>
    );
}
export default Card;
