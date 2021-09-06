import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Header = (props) => {

    // dispatch
    const dispatch = useDispatch();

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
                <button className="header_logout_btn" onClick={() => handleLogout()}>Logout</button>
            </div>
        </Fragment>
    )

}

export default withRouter(Header);
