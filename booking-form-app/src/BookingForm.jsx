import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css';

// Validation schema
const schema = yup.object().shape({
    flights: yup.array().of(
        yup.object().shape({
            origin: yup.string().required('Вкажіть місце відправлення'),
            destination: yup.string().required('Вкажіть місце призначення'),
            departureDate: yup.date().required('Вкажіть дату відправлення'),
        })
    ),
});

const BookingForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            flights: [{ id: 1, origin: '', destination: '', departureDate: '' }],
        },
    });
    const [flights, setFlights] = useState([{ id: 1 }]);
    const [tripType, setTripType] = useState('round-trip');
    const [classType, setClassType] = useState('economy');

    const onSubmit = (data) => {
        console.log(data); // Replace with your actual submit logic
        alert('Форма успішно надіслана!');
    };

    const addFlight = () => {
        setFlights([...flights, { id: Date.now() }]);
    };
    const removeFlight = (id) => {
        setFlights(flights.filter(flight => flight.id !== id));
    };

    return (
        <div className="booking-container">
            <h2>Порівняйте і бронюйте перельоти з легкістю</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Trip Type Options */}
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

                <div className="selectors">
                    <select value={classType} onChange={(e) => setClassType(e.target.value)}>
                        <option value="economy">Економ</option>
                        <option value="business">Бізнес</option>
                        <option value="first">Перший клас</option>
                    </select>
                    <select>
                        <option value="1">1 дорослий</option>
                        <option value="2">2 дорослих</option>
                        <option value="3">3 дорослих</option>
                    </select>
                </div>

                {/* Flight Rows */}
                {flights.map((flight, index) => (
                    <div key={flight.id} className="flight-row">
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
                ))}
                {tripType === 'multi-city' && (
                    <button type="button" onClick={addFlight} className="add-flight-btn">Додати рейс</button>
                )}
                <button type="submit" className="submit-btn">Шукати</button>
            </form>
        </div>
    );
};

export default BookingForm;
