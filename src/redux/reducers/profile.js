import * as Types from '../action-types';

let userList = sessionStorage.getItem("userList") ? JSON.parse(sessionStorage.getItem("userList")) : [];
let defaultState = {
    userInfo: userList, //用户的信息
    isLogin: false //是否登录
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case Types.SET_USER_INFO:
            return {
                userInfo: [
                    ...state.userInfo,
                    action.userInfo
                ]
            };
        case Types.LOGIN:
            return {
                ...state,
                isLogin: true
            };
        case Types.LOGOUT:
            return {
                ...state,
                isLogin: false
            };
        case Types.SYNC:
            return {
                ...state,
                userInfo: action.userList
            };
        default:
            return state;
    }
}