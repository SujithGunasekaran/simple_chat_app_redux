import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Header = (props) => {

    // dispatch
    const dispatch = useDispatch();

    // redux-state
    const { loggedUserInfo } = useSelector(state => state.userReducer);

    const handleLogout = () => {
        dispatch({
            type: 'SET_RESET_STORE'
        })

        props.history.push('/')
    }

    return (
        <Fragment>
            <div className="header_container">
                <div className="header_logo">ChatApp</div>
                {
                    Object.keys(loggedUserInfo).length > 0 &&
                    <button className="header_logout_btn" onClick={() => handleLogout()}>Logout</button>
                }
            </div>
        </Fragment>
    )

}

export default withRouter(Header);
