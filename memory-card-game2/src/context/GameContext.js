import React, { createContext, useState } from 'react';

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
    ].sort(() => Math.random() - 0.5));  // Перемішуємо картки при ініціалізації

    const [flippedCards, setFlippedCards] = useState([]);  // Зберігаємо перевернуті картки
    const [gameWon, setGameWon] = useState(false);  // Статус виграшу
    
    const flipCard = (id) => {
        if (flippedCards.length === 2 || flippedCards.includes(id)) return; // Перевірка на максимальну кількість перевернутих карток

        // Перевертаємо картку за її id
        const newCards = cards.map((card) =>
            card.id === id ? { ...card, isFlipped: true } : card
        );
        setCards(newCards);  // Оновлюємо карти
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

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;  // Обгортка дочірніх компонентів
};

export default GameContext;
