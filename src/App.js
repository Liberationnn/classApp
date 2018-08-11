import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./containers/Home/Home";
import Lesson from "./containers/Lesson/Lesson";
import Profile from "./containers/Profile/Profile";
import Tab from "./components/Tab/Tab";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/lesson' component={Lesson}></Route>
                        <Route path='/profile' component={Profile}></Route>
                    </Switch>
                    <Tab/>
                </div>
            </Router>
        );
    }
}