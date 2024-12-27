import React, { useContext } from 'react';
import Card from '../Card/Card';
import GameContext from '../../context/GameContext';
import useMatchCheck from '../../hooks/useMatchCheck';
import './GameBoard.css';
import '../../components/Card/Card.module.css';
function GameBoard() {
    const { cards, flipCard, gameWon, setCards, setFlippedCards, setGameWon } = useContext(GameContext);
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
