import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../Hooks/useForm';
import { fromNow } from '../Util';

const Chat = (props) => {

    // redux-state
    const { currentViewUserInfo } = useSelector(state => state.userReducer);

    // hooks
    const { formValues, formError, handleInputField, setFormError } = useForm();

    // dispatch
    const dispatch = useDispatch();

    const sendMessage = () => {
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
            })
        }
        else {
            setFormError({ 'message_Error': 'Please enter something' });
        }
    }

    console.log(currentViewUserInfo)

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
                                <div className="row" style={{ width: '100%' }} >
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
                                        <button className="chat_user_message_btn" onClick={() => sendMessage()}>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </Fragment>
    )

};

export default Chat;
