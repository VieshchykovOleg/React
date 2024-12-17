import * as yup from 'yup';

const schema = yup.object().shape({
    tripType: yup.string().required(),
    flights: yup.array().of(
        yup.object().shape({
            origin: yup
                .string()
                .required('Вкажіть місце відправлення')
                .matches(/^[A-Za-zА-Яа-я]+$/, 'Введіть лише літери'),
            destination: yup
                .string()
                .required('Вкажіть місце призначення')
                .matches(/^[A-Za-zА-Яа-я]+$/, 'Введіть лише літери')
                .notOneOf([yup.ref('origin'), null], 'Місце призначення не може співпадати з місцем відправлення'),
            departureDate: yup
                .date()
                .required('Вкажіть дату відправлення')
                .min(new Date(), 'Дата відправлення не може бути в минулому'),
            returnDate: yup
                .date()
                .when('departureDate', (departureDate, schema) => {
                    return schema.min(departureDate, 'Дата повернення не може бути раніше дати відправлення');
                })
                .nullable(),
            passengers: yup
                .number()
                .max(9, 'Максимум 9 пасажирів')
                .required('Вкажіть кількість пасажирів'),
        })
    ).max(5, 'Максимальна кількість рейсів - 5'),
});

export default schema;
