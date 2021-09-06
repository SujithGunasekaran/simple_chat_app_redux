import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

const UserListInfo = ({ userInfo }) => {

    // dispatch
    const dispatch = useDispatch();

    const handleUserSelect = (userData) => {
        dispatch({
            type: 'SET_CURRENT_VIEW_USER',
            currentViewUserInfo: userData
        })
    }

    return (
        <Fragment>
            <div className="home_user_item" onClick={() => handleUserSelect(userInfo)}>
                <div className="home_user_name">{userInfo?.userName ?? ''}</div>
                <div className="home_user_message_length">{userInfo.messages.length}</div>
            </div>
        </Fragment>
    )

}

export default UserListInfo;
