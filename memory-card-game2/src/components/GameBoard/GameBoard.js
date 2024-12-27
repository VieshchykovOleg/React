import React, { useContext, useEffect } from 'react';
import Card from '../Card/Card';
import GameContext from '../../context/GameContext';
import useMatchCheck from '../../hooks/useMatchCheck';
import './GameBoard.css';

function GameBoard() {
    // Отримуємо з контексту дані про карти, функції для перевертання карток та статус гри
    const { cards, flipCard, gameWon, setCards, setFlippedCards, setGameWon } = useContext(GameContext);

    // Використовуємо кастомний хук для перевірки збігів карток
    useMatchCheck(cards, setCards, setFlippedCards, setGameWon);

    return (
        <div className="game-board">
            {/* Відображення карток */}
            {cards.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    onCardClick={flipCard}
                    isFlipped={card.isFlipped}
                    isMatched={card.isMatched}
                />
            ))}
            {gameWon && <h2>Congratulation!!!</h2>}  {/* Показуємо повідомлення про перемогу */}
        </div>
    );
}

export default GameBoard;
