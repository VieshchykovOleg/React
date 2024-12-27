import React from 'react';
import './Card.module.css';
import PropTypes from 'prop-types';
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
// Описуємо які пропси очікуються компонентом і їх типи
Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        isFlipped: PropTypes.bool.isRequired,
        isMatched: PropTypes.bool.isRequired,
    }).isRequired,
    onCardClick: PropTypes.func.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    isMatched: PropTypes.bool.isRequired,
};
export default Card;
