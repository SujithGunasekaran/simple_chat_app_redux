import React, { Fragment } from 'react';
import useForm from '../Hooks/useForm';
import { validateForm } from '../Util';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

const ModelForm = (props) => {

    // props
    const { closeModel } = props;

    // hooks
    const { formValues, formError, handleInputField, setFormError } = useForm();

    // dispatch
    const dispatch = useDispatch();

    const handleModelFormSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm(['userName', 'email', 'phoneNumber'], formValues, setFormError);
        if (isFormValid) {
            dispatch({
                type: 'SET_CONTACT_USER',
                newUser: {
                    ...formValues,
                    userID: v4(),
                    messages: []
                }
            });
            closeModel();
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleModelFormSubmit}>
                <input
                    type="text"
                    className="model_input"
                    name="userName"
                    placeholder="Enter userName"
                    value={formValues?.userName ?? ''}
                    onChange={handleInputField}
                />
                {
                    formError['userName_Error'] ?
                        <div className="model_form_error">{formError['userName_Error']}</div> : null
                }
                <input
                    type="email"
                    className="model_input"
                    name="email"
                    placeholder="Enter Email Address"
                    value={formValues?.email ?? ''}
                    onChange={handleInputField}
                />
                {
                    formError['email_Error'] ?
                        <div className="model_form_error">{formError['email_Error']}</div> : null
                }
                <input
                    type="number"
                    className="model_input"
                    name="phoneNumber"
                    maxLength={10}
                    placeholder="Enter Phone Number"
                    value={formValues?.phoneNumber ?? ''}
                    onChange={handleInputField}
                />
                {
                    formError['phoneNumber_Error'] ?
                        <div className="model_form_error">{formError['phoneNumber_Error']}</div> : null
                }
                <button type="submit" className="model_form_btn">Add User</button>
            </form>
        </Fragment>
    )

}

export default ModelForm;
