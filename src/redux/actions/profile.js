import * as Types from '../action-types';

export const setUserInfo = (userInfo) => ({
    type: Types.SET_USER_INFO,
    userInfo
});

export const login = () => ({
    type: Types.LOGIN
});

export const logout = () => ({
    type: Types.LOGOUT
});

export const sync = (userList) => ({
    type: Types.SYNC,
    userList
});