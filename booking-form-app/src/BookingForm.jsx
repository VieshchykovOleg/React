import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css';

const schema = yup.object().shape({
    destination: yup
        .string()
        .required('Вкажіть місце призначення')
        .min(3, 'Місце призначення має містити не менше 3 символів'),
    destinationTo: yup
        .string()
        .required('Вкажіть місце прибуття')
        .min(3, 'Місце прибуття має містити не менше 3 символів'),
    departureDate: yup
        .date()
        .required('Вкажіть дату відправлення')
        .min(new Date(), 'Дата відправлення не може бути в минулому'),
    returnDate: yup
        .date()
        .required('Вкажіть дату повернення')
        .min(yup.ref('departureDate'), 'Дата повернення не може бути раніше дати відправлення'),
    passengers: yup
        .number()
        .min(1, 'Потрібен хоча б один пасажир')
        .required('Вкажіть кількість пасажирів')
        .integer('Кількість пасажирів має бути цілим числом')
        .positive('Кількість пасажирів має бути позитивним числом'),
});

const BookingForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [successMessage, setSuccessMessage] = useState('');

    const onSubmit = (data) => {
        console.log(data);
        setSuccessMessage('Форма успішно надіслана!');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Який ваш Аеропорт?</label>
                <input type="text" {...register('destination')} />
                <p>{errors.destination?.message}</p>
            </div>

            <div>
                <label>Куди плануєте?</label>
                <input type="text" {...register('destinationTo')} />
                <p>{errors.destinationTo?.message}</p>
            </div>

            <div>
                <label>Дата відправлення</label>
                <input type="date" {...register('departureDate')} />
                <p>{errors.departureDate?.message}</p>
            </div>

            <div>
                <label>Дата повернення</label>
                <input type="date" {...register('returnDate')} />
                <p>{errors.returnDate?.message}</p>
            </div>

            <div>
                <label>Кількість пасажирів</label>
                <input type="number" {...register('passengers')} />
                <p>{errors.passengers?.message}</p>
            </div>

            <button type="submit">Надіслати</button>

            {successMessage && <p>{successMessage}</p>} 
        </form>
    );
};

export default BookingForm;
