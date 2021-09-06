import React, { Fragment, Suspense, lazy } from 'react';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';

const UserList = lazy(() => import('../Components/UserList'));
const Chat = lazy(() => import('../Components/Chat'));

const Home = (props) => {

    // props
    const { history } = props;

    // redux-state
    const { loggedUserInfo } = useSelector(state => state.userReducer);

    if (!loggedUserInfo || Object.keys(loggedUserInfo).length === 0) {
        history.push('/');
    }

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Suspense fallback={<div>Loading...</div>}>
                            <UserList />
                        </Suspense>
                    </div>
                    <div className="col-md-9">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Chat />
                        </Suspense>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default withRouter(Home);
