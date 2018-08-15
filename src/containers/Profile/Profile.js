import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/profile';
import './profile.css';

class Profile extends Component {
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

    logout = () => {
        this.props.logout();
        let userList = sessionStorage.getItem("userList") ? JSON.parse(sessionStorage.getItem("userList")) : [];
        if (userList.length > 0) {
            userList.forEach(item => {
                if (item.isLogin) {
                    item.isLogin = false;
                    this.props.logout();
                }
            });
            this.props.sync(userList);
            sessionStorage.setItem("userList", JSON.stringify(userList));
        }
    };

    render() {
        let loginTemp = (
            <Link to="/login" className="login-btn">登录</Link>
        );

        let logoutTemp = (
            <Link to="/login" className="logout-btn" onClick={this.logout}>注销</Link>
        );

        return (
            <div className="profile">
                <div className="profile-bg">
                    <div className="head"></div>
                    {this.props.profile.isLogin ? logoutTemp : loginTemp}
                </div>
            </div>
        );
    }
}

export default connect(state => ({...state}), action)(Profile);