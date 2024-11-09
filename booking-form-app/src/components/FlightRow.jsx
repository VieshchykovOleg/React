import React from 'react';
const FlightRow = ({ flight, index, tripType, register, errors, removeFlight }) => (
    <div className="flight-row">
        <div>
            <label>Звідки?</label>
            <input type="text" {...register(`flights[${index}].origin`)} placeholder="Вкажіть місце відправлення" />
            <p>{errors?.flights?.[index]?.origin?.message}</p>
        </div>
        <div>
            <label>Куди?</label>
            <input type="text" {...register(`flights[${index}].destination`)} placeholder="Вкажіть місце призначення" />
            <p>{errors?.flights?.[index]?.destination?.message}</p>
        </div>
        <div>
            <label>Дата відправлення</label>
            <input type="date" {...register(`flights[${index}].departureDate`)} />
            <p>{errors?.flights?.[index]?.departureDate?.message}</p>
        </div>
        {tripType === 'round-trip' && (
            <div>
                <label>Дата повернення</label>
                <input type="date" {...register(`flights[${index}].returnDate`)} />
                <p>{errors?.flights?.[index]?.returnDate?.message}</p>
            </div>
        )}
        {index > 0 && (
            <button type="button" onClick={() => removeFlight(flight.id)} className="remove-flight-btn">×</button>
        )}
    </div>
);

export default FlightRow;
