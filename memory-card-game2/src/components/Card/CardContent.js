import React from 'react';

function CardContent({ value, isFlipped, isMatched }) {
    return <div>{isFlipped || isMatched ? value : '?'}</div>;
}

export default CardContent;
