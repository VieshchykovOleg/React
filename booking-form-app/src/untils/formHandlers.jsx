export const addFlight = (flights, setFlights) => {
    if (flights.length < 5) {
        setFlights([...flights, { id: Date.now() }]);
    } else {
        alert('Максимальна кількість рейсів - 5');
    }
};

export const removeFlight = (id, flights, setFlights) => {
    setFlights(flights.filter(flight => flight.id !== id));
};

export const updateAdults = (change, adults, setAdults, setShowForm) => {
    let newAdults = adults + change;
    if (newAdults < 1) newAdults = 1;
    if (newAdults > 9) newAdults = 9;
    setAdults(newAdults);
    setShowForm(false);
};

export const onSubmit = (data, setFormSubmitted, setSubmissionStatus, errors) => {
    console.log("Форма була відправлена успішно");
    if (Object.keys(errors).length === 0) {
        setFormSubmitted(true);
        setSubmissionStatus({ message: 'Успішно!', type: 'success' });
        setTimeout(() => {
            console.log("Hiding success message");
            setFormSubmitted(false);
            setSubmissionStatus(null);
        }, 3000);
    } else {
        setSubmissionStatus({ message: 'Помилка! Перевірте дані форми.', type: 'error' });
    }
};
