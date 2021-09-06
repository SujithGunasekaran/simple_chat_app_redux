import React, { Fragment, useState, Suspense, lazy } from 'react';
import { UserAddIcon, CancelIcon } from '../Components/Icons';
import ModelForm from './ModelForm';

const UserListItem = lazy(() => import('./UserListItem'));

const UserList = () => {

    // state
    const [showAddUserPopup, setShowAddUserPopup] = useState(false);

    return (
        <Fragment>
            <div className="home_user_list_container">
                <div className="home_user_list_header">
                    <div className="home_user_list_heading">User List</div>
                    <div className="home_user_bg">
                        <UserAddIcon
                            cssClass="home_user_add_person_icon"
                            handleEvent={() => setShowAddUserPopup(true)}
                        />
                    </div>
                </div>
                <div className="home_user_list_info">
                    <Suspense fallback={<div></div>}>
                        <UserListItem />
                    </Suspense>
                </div>
            </div>
            {
                showAddUserPopup &&
                <div className="model_overlay">
                    <div className="model_container">
                        <div className="model_head_container">
                            <div className="model_heading">Add User</div>
                            <CancelIcon
                                cssClass="model_head_cancel_icon"
                                handleEvent={() => setShowAddUserPopup(false)}
                            />
                        </div>
                        <ModelForm
                            closeModel={() => setShowAddUserPopup(false)}
                        />
                    </div>
                </div>
            }
        </Fragment>
    )

};

export default UserList;
