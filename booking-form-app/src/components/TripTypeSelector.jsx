import React from 'react';

const TripTypeSelector = ({ tripType, setTripType }) => (
    <div className="trip-type">
        <label>
            <input type="radio" name="tripType" value="round-trip" checked={tripType === 'round-trip'} onChange={() => setTripType('round-trip')} />
            В обидва кінці
        </label>
        <label>
            <input type="radio" name="tripType" value="one-way" checked={tripType === 'one-way'} onChange={() => setTripType('one-way')} />
            В один кінець
        </label>
        <label>
            <input type="radio" name="tripType" value="multi-city" checked={tripType === 'multi-city'} onChange={() => setTripType('multi-city')} />
            Складний маршрут
        </label>
    </div>
);

export default TripTypeSelector;
