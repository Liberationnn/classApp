import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./containers/Home/Home";
import Lesson from "./containers/Lesson/Lesson";
import Profile from "./containers/Profile/Profile";
import Tab from "./components/Tab/Tab";
import Detail from "./containers/Home/Detail/Detail";
import Login from "./containers/Profile/Login/Login";
import Register from "./containers/Profile/Register/Register";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/lesson' component={Lesson}></Route>
                        <Route path='/profile' component={Profile}></Route>
                        <Route path='/detail' component={Detail}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Register}></Route>
                    </Switch>
                    <Tab/>
                </div>
            </Router>
        );
    }
}