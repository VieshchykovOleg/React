import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './untils/validationSchema';
import { addFlight, removeFlight, updateAdults, onSubmit } from './untils/formHandlers';
import FlightRow from './components/FlightRow';
import TripTypeSelector from './components/TripTypeSelector';
import ClassSelector from './components/ClassSelector';
import AdultSelector from './components/AdultSelector';
import './App.css';

const BookingForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            tripType: 'round-trip',
            flights: [{ id: 1, origin: '', destination: '', departureDate: '', returnDate: '' }],
        },
    });
    const [flights, setFlights] = useState([{ id: 1 }]);
    const [tripType, setTripType] = useState('round-trip');
    const [classType, setClassType] = useState('economy');
    const [adults, setAdults] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);
    return (
        <div className="booking-container">
            <h2>Порівняйте і бронюйте перельоти з легкістю</h2>
            <form onSubmit={handleSubmit((data) => onSubmit(data,setSubmissionStatus))}>
                <TripTypeSelector tripType={tripType} setTripType={setTripType} />
                <input type="hidden" value={tripType} {...register('tripType')} />
                <div className="selectors">
                    <ClassSelector classType={classType} setClassType={setClassType} />
                    <AdultSelector adults={adults} setShowForm={setShowForm} showForm={showForm} updateAdults={(change) => updateAdults(change, adults, setAdults, setShowForm)} />
                </div>
                {flights.map((flight, index) => (
                    <FlightRow
                        key={flight.id}
                        flight={flight}
                        index={index}
                        tripType={tripType}
                        register={register}
                        errors={errors}
                        removeFlight={(id) => removeFlight(id, flights, setFlights)}
                    />
                ))}
                {tripType === 'multi-city' && (
                    <button type="button" onClick={() => addFlight(flights, setFlights)} className="add-flight-btn">Додати рейс</button>
                )}
                <button type="submit" className="submit-btn">Перевірити валідність</button>
            </form>
            {submissionStatus && <div className={`message ${submissionStatus.type}`}>{submissionStatus.message}</div>}
        </div>
    );
};

export default BookingForm;
