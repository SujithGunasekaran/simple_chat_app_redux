import React, { Fragment, useEffect } from 'react';
import useForm from '../Hooks/useForm';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateForm } from '../Util/index';

const Login = (props) => {

    // hooks
    const { formValues, formError, setFormError, handleInputField } = useForm();

    // props
    const { history } = props;

    // redux-state
    const { loggedUserInfo } = useSelector(state => state.userReducer);

    // dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        if (loggedUserInfo && Object.keys(loggedUserInfo).length > 0) {
            history.push('/home')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = validateForm(['userName', 'email', 'phoneNumber'], formValues, setFormError);
        if (isFormValid) {
            setFormError({});
            try {
                const { data } = await axios.post('http://localhost:5000/api/user/', formValues);
                if (data && data.status === 'Success') {
                    dispatch({
                        type: 'SET_LOGGED_USER_INFO',
                        userInfo: data.userInfo
                    })
                    history.push('/home');
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="login_main">
                            <form onSubmit={handleLoginFormSubmit}>
                                <input
                                    type="text"
                                    className="login_input"
                                    name="userName"
                                    placeholder="Enter userName"
                                    value={formValues?.userName ?? ''}
                                    onChange={handleInputField}
                                />
                                {
                                    formError['userName_Error'] ?
                                        <div className="form_error">{formError['userName_Error']}</div> : null
                                }
                                <input
                                    type="email"
                                    className="login_input"
                                    name="email"
                                    placeholder="Enter Email Address"
                                    value={formValues?.email ?? ''}
                                    onChange={handleInputField}
                                />
                                {
                                    formError['email_Error'] ?
                                        <div className="form_error">{formError['email_Error']}</div> : null
                                }
                                <input
                                    type="tel"
                                    className="login_input"
                                    name="phoneNumber"
                                    maxLength={10}
                                    placeholder="Enter Phone Number"
                                    value={formValues?.phoneNumber ?? ''}
                                    onChange={handleInputField}
                                />
                                {
                                    formError['phoneNumber_Error'] ?
                                        <div className="form_error">{formError['phoneNumber_Error']}</div> : null
                                }
                                <button type="submit" className="login_form_btn">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default withRouter(Login);
