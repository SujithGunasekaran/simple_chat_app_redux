import moment from 'moment';

export const validateForm = (requiredInputFields, formValues, setFormError) => {
    let result = true;
    requiredInputFields.forEach(fieldName => {
        if (!formValues[fieldName]) {
            result = false;
            setFormError(prevFormError => {
                let formError = JSON.parse(JSON.stringify(prevFormError));
                formError = {
                    ...formError,
                    [`${fieldName}_Error`]: `Please enter ${fieldName}`
                }
                return formError;
            })
        }

    })
    return result;
}

export const fromNow = (date) => {
    return moment.unix(date / 1000).fromNow();
}
