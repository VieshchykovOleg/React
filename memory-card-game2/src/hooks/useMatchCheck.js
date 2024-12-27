import { useEffect } from 'react';

const useMatchCheck = (cards, flippedCards, setCards, setFlippedCards, setGameWon) => {
    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstId, secondId] = flippedCards;
            const firstCard = cards.find((card) => card.id === firstId);
            const secondCard = cards.find((card) => card.id === secondId);

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
                setTimeout(() => {
                    const newCards = cards.map((card) =>
                        !card.isMatched ? { ...card, isFlipped: false } : card
                    );
                    setCards(newCards);
                    setFlippedCards([]);
                }, 1000);
            }
        }
    }, [flippedCards, cards, setCards, setFlippedCards]);


    useEffect(() => {
        const unmatchedCards = cards.filter((card) => !card.isMatched);
        if (unmatchedCards.length === 0) {
            setTimeout(() => {
                setGameWon(true);
            }, 1000);
        }
    }, [cards, setGameWon]);
};

export default useMatchCheck;
