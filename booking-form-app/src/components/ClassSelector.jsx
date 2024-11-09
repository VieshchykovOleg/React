import React from 'react';
const ClassSelector = ({ classType, setClassType }) => (
    <select value={classType} onChange={(e) => setClassType(e.target.value)}>
        <option value="economy">Економ</option>
        <option value="business">Бізнес</option>
        <option value="first">Перший клас</option>
    </select>
);

export default ClassSelector;
