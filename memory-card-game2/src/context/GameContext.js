import React, { createContext, useState } from 'react';

// Створюємо контекст
const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [cards, setCards] = useState([
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
    ].sort(() => Math.random() - 0.5));

    const [flippedCards, setFlippedCards] = useState([]);
    const [gameWon, setGameWon] = useState(false);

    const flipCard = (id) => {
        if (flippedCards.length === 2 || flippedCards.includes(id)) return;

        const newCards = cards.map((card) =>
            card.id === id ? { ...card, isFlipped: true } : card
        );
        setCards(newCards);
        setFlippedCards([...flippedCards, id]);
    };

    const value = {
        cards,
        flipCard,
        gameWon,
        setCards,
        setFlippedCards,
        setGameWon,
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContext;
