import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../Hooks/useForm';
import { fromNow } from '../Util';

const Chat = () => {

    // redux-state
    const { currentViewUserInfo } = useSelector(state => state.userReducer);

    // hooks
    const { formValues, formError, handleInputField, setFormError, resetInputField } = useForm();

    // dispatch
    const dispatch = useDispatch();

    const sendMessage = (e) => {
        e.preventDefault();
        if (formValues.message) {
            dispatch({
                type: 'SET_USER_MESSAGE',
                message: {
                    userID: currentViewUserInfo.userID,
                    message: {
                        message: formValues.message,
                        time: Date.now()
                    }
                }
            });
            resetInputField();
        }
        else {
            setFormError({ 'message_Error': 'Please enter something' });
        }
    }

    return (
        <Fragment>
            {
                !currentViewUserInfo ?
                    <div className="chat_empty_message">Select any of your friend to start conversation...</div> :
                    <div className="chat_user_container">
                        <div className="chat_user_name">{currentViewUserInfo.userName}</div>
                        <div className="chat_user_message_box">
                            <div className="chat_user_message_list">
                                {
                                    currentViewUserInfo['messages'] &&
                                    currentViewUserInfo.messages.map((messageInfo, index) => (
                                        <div key={index} className="chat_user_message_card">
                                            <div className="chat_user_message_text">{messageInfo.message.message}</div>
                                            <div className="chat_user_message_time">{fromNow(messageInfo.message.time)}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="chat_user_message_input_container">
                                <form onSubmit={sendMessage} style={{ width: '100%' }}>
                                    <div className="row" >
                                        <div className="col-md-11">
                                            <input
                                                className="chat_user_message_input"
                                                placeholder="Type Something..."
                                                name="message"
                                                value={formValues?.message ?? ''}
                                                onChange={handleInputField}
                                            />
                                            {
                                                formError.message_Error &&
                                                <div className="form_error">{formError['message_Error']}</div>
                                            }
                                        </div>
                                        <div className="col-md-1">
                                            <button type="submit" className="chat_user_message_btn">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            }
        </Fragment>
    )

};

export default Chat;
