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



export default GameBoard;
