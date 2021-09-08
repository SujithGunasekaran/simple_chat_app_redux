import { useState } from 'react';


const useForm = () => {

    const [formValues, setFormValues] = useState({});
    const [formError, setFormError] = useState({});

    const handleInputField = (e) => {
        setFormValues(prevValues => {
            let formError = JSON.parse(JSON.stringify(prevValues));
            formError = {
                ...formError,
                [e.target.name]: e.target.value
            };
            return formError;
        })
        if (formError[`${e.target.name}_Error`]) {
            setFormError(prevValues => {
                let formError = JSON.parse(JSON.stringify(prevValues));
                formError = {
                    ...formError,
                    [`${e.target.name}_Error`]: ''
                };
                return formError;
            })
        }
    }


    const resetInputField = () => {
        setFormValues({});
    }


    return { formValues, formError, handleInputField, setFormError, resetInputField }

}

export default useForm;
