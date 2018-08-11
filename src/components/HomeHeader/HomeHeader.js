import React, {Component} from 'react';
import './HomeHeader.css';

export default class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {isShow: false};
    }

    changeShow = () => {
        this.setState({isShow: !this.state.isShow});
    };

    choose = (e) => {
        this.props.chooseLesson(e.target.type);
        this.changeShow();
    };

    render() {
        let ul = (
            <ul className="menu-list" onClick={this.choose}>
                <li type="1">List 1</li>
                <li type="2">List 2</li>
                <li type="3">List 3</li>
                <li type="4">List 4</li>
            </ul>
        );

        return (
            <div className="home-header">
                <div className="header-menu">
                    <div>
                        <i className={this.state.isShow ? "iconfont icon-guanbi" : "iconfont icon-uilist"} onClick={this.changeShow}></i>
                    </div>
                </div>
                {this.state.isShow ? ul : null}
            </div>
        );
    }
};