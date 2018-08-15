import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../../redux/actions/profile';
import MHeader from "../../../components/MHeader/MHeader";
import './register.css';

// 只有通过路由渲染的页面才有history属性
class Register extends Component {
    register = () => {
        let {username, password} = this.refs;
        let userInfo = {
            username: username.value,
            password: password.value,
            isLogin: false
        };
        let flag = false;
        this.props.profile.userInfo.forEach(item => {
            if (item.username === userInfo.username || userInfo.username.trim() === "" || userInfo.password.trim() === "") {
                flag = true;
            }
        });
        console.log(flag);
        if (!flag) {
            let userList = sessionStorage.getItem("userList") ? JSON.parse(sessionStorage.getItem("userList")) : [];
            sessionStorage.setItem("userList", JSON.stringify([...userList, userInfo]));
            this.props.setUserInfo(userInfo);
        }
    };

    render() {
        return (
            <div className="register">
                <MHeader title="注册"/>
                <div className="header"></div>
                <ul>
                    <li><input ref="username" type="text" placeholder="请输入用户名"/></li>
                    <li><input ref="password" type="text" placeholder="请输入密码"/></li>
                    <li><Link to="/login" className="register-btn" onClick={this.register}>注册</Link></li>
                </ul>
            </div>
        );
    }
}

export default connect(state => ({...state}), action)(Register);