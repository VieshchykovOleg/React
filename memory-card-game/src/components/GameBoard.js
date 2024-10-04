import React, { useState, useEffect } from 'react';
import Card from './Card';
import './GameBoard.css';

const initialCards = [
    { id: 1, value: '🍎', isFlipped: false, isMatched: false },
    { id: 2, value: '🍎', isFlipped: false, isMatched: false },
    { id: 3, value: '🍌', isFlipped: false, isMatched: false },
    { id: 4, value: '🍌', isFlipped: false, isMatched: false },
    { id: 5, value: '🍇', isFlipped: false, isMatched: false },
    { id: 6, value: '🍇', isFlipped: false, isMatched: false },
    { id: 7, value: '🍒', isFlipped: false, isMatched: false },
    { id: 8, value: '🍒', isFlipped: false, isMatched: false },
    { id: 9, value: '🥝', isFlipped: false, isMatched: false },
    { id: 10, value: '🥝', isFlipped: false, isMatched: false },
    { id: 11, value: '🍉', isFlipped: false, isMatched: false },
    { id: 12, value: '🍉', isFlipped: false, isMatched: false },
].sort(() => Math.random() - 0.5);

function GameBoard() {
    // Стан для карток та перевернутих карток і виграшу
    const [cards, setCards] = useState(initialCards);
    const [flippedCards, setFlippedCards] = useState([]);
    const [gameWon, setGameWon] = useState(false);

    // Обробка кліку
    const handleCardClick = (id) => {
        if (flippedCards.length === 2 || flippedCards.includes(id)) return;

        // Перевертаємо картку
        const newCards = cards.map((card) =>
            card.id === id ? { ...card, isFlipped: true } : card
        );

        setCards(newCards);
        setFlippedCards([...flippedCards, id]);
    };
    // Хук для обробки перевернутіх карток
    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstId, secondId] = flippedCards;
            const firstCard = cards.find((card) => card.id === firstId);
            const secondCard = cards.find((card) => card.id === secondId);

            // Перевірка на збіг
            if (firstCard.value === secondCard.value) {
                setTimeout(() => {
                    const newCards = cards.map((card) =>
                        card.id === firstId || card.id === secondId
                            ? { ...card, isMatched: true }
                            : card
                    );
                    setCards(newCards);
                    setFlippedCards([]);
                }, 1000);
            } else {
                // Якщо не співпадають перевертаємо назад
                setTimeout(() => {
                    const newCards = cards.map((card) =>
                        !card.isMatched ? { ...card, isFlipped: false } : card
                    );
                    setCards(newCards);
                    setFlippedCards([]);
                }, 1000);
            }
        }
    }, [flippedCards, cards]);
    useEffect(() => {
        const unmatchedCards = cards.filter((card) => !card.isMatched);
        if (unmatchedCards.length === 0) {
            setTimeout(() => {
                setGameWon(true);
            }, 1000);
        }
    }, [cards]);

    return (
        <div className="game-board">
            {/* Відображення карток */}
            {cards.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    onCardClick={handleCardClick}
                    isFlipped={card.isFlipped}
                    isMatched={card.isMatched}
                />
            ))}
            {gameWon && <h2>Congratulation!!!</h2>}
        </div>
    );
}

export default GameBoard;
