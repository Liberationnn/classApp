import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../../redux/actions/profile';
import MHeader from "../../../components/MHeader/MHeader";
import './login.css';

// 只有通过路由渲染的页面才有history属性
class Login extends Component {
    componentWillMount() {
        let userList = sessionStorage.getItem("userList") ? JSON.parse(sessionStorage.getItem("userList")) : [];
        if (userList.length > 0) {
            userList.forEach(item => {
                if (item.isLogin) {
                    this.props.login();
                }
            });
        }
    }

    login = () => {
        let {username, password} = this.refs;
        username = username.value;
        password = password.value;
        let userList = sessionStorage.getItem("userList") ? JSON.parse(sessionStorage.getItem("userList")) : [];
        if (userList.length > 0) {
            userList.forEach(item => {
                if (item.username === username && item.password === password) {
                    item.isLogin = true;
                    this.props.login();
                } else {
                    item.isLogin = false;
                }
            });
            this.props.sync(userList);
            sessionStorage.setItem("userList", JSON.stringify(userList));
        }
    };

    render() {
        return (
            <div className="login">
                <MHeader title="登录"/>
                <div className="header"></div>
                <ul>
                    <li><input ref="username" type="text" placeholder="请输入用户名"/></li>
                    <li><input ref="password" type="text" placeholder="请输入密码"/></li>
                    <li><Link to="/profile" className="login-btn" onClick={this.login}>登录</Link></li>
                    <li><Link to="/register">注册</Link></li>
                </ul>
            </div>
        );
    }
}

export default connect(state => ({...state}), action)(Login);