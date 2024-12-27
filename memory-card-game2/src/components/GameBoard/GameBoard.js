import React, { useContext } from 'react';
import Card from './Card';
import GameContext from '../context/GameContext';
import './GameBoard.css';

const GameBoard = () => {
    const { cards, flipCard, gameWon } = useContext(GameContext);

    return (
        <div className="game-board">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    onCardClick={flipCard}
                    isFlipped={card.isFlipped}
                    isMatched={card.isMatched}
                />
            ))}
            {gameWon && <h2>Congratulations! You've won!</h2>}
        </div>
    );
};

export default GameBoard;
