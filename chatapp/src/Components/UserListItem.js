import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import UserListInfo from './UserListInfo';

const UserlistItem = () => {

    // redux-state
    const { contactUser } = useSelector(state => state.userReducer);

    return (
        <Fragment>
            {
                contactUser.length > 0 ?
                    contactUser.map((userInfo, index) => (
                        <Fragment key={index}>
                            <UserListInfo
                                userInfo={userInfo}
                            />
                            {
                                index < contactUser.length - 1 && <hr />
                            }
                        </Fragment>
                    )) : <div>You have not added any friends</div>
            }
        </Fragment>
    )

}

export default UserlistItem;
