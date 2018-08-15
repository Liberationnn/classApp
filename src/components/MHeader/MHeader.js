import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './mheader.css';

class MHeader extends Component {
    back = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div className="m-header">
                <i className="iconfont icon-fanhui" onClick={this.back}></i>
                {this.props.title}
            </div>
        );
    }
}

// 在当前组件上增加history属性
export default withRouter(MHeader);