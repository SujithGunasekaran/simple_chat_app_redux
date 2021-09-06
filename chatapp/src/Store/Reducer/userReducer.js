import { SET_CONTACT_USER, SET_LOGGED_USER_INFO, SET_CURRENT_VIEW_USER, SET_USER_MESSAGE, SET_RESET_STORE } from '../Types';

const initialState = {
    loggedUserInfo: {},
    contactUser: [],
    currentViewUserInfo: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGGED_USER_INFO:
            return {
                ...state,
                loggedUserInfo: action.userInfo
            }
        case SET_CONTACT_USER:
            let userList = state.contactUser ? [
                ...state.contactUser,
                action.newUser
            ] :
                [
                    ...initialState.contactUser,
                    action.newUser
                ]
            return {
                ...state,
                contactUser: userList
            }
        case SET_CURRENT_VIEW_USER:
            return {
                ...state,
                currentViewUserInfo: action.currentViewUserInfo
            }
        case SET_USER_MESSAGE:
            let user = state.contactUser;
            let currentViewUserInfo = state.currentViewUserInfo;
            let userIndex = user.findIndex(user => user.userID === action.message.userID);
            currentViewUserInfo = {
                ...currentViewUserInfo,
                messages: [
                    ...currentViewUserInfo.messages,
                    action.message
                ]
            };
            user[userIndex] = {
                ...user[userIndex],
                messages: [
                    ...user[userIndex]['messages'],
                    action.message
                ]
            };
            return {
                ...state,
                contactUser: user,
                currentViewUserInfo
            }
        case SET_RESET_STORE:
            return {
                ...state,
                loggedUserInfo: '',
                contactUser: [],
                currentViewUserInfo: null
            }
        default: return state;
    }
}
