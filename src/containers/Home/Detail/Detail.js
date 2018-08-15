import React, {Component} from 'react';
import './detail.css';

export default class Detail extends Component {
    componentWillMount () {
        if (!this.props.location.state) {
            this.props.history.push('/');
        }
    }

    render() {
        let {url, lesson, price} = this.props.location.state || {};

        return (
            <div className="detail">
                <img src={url} alt=""/>
                <p>{lesson}</p>
                <strong>{price}</strong>
            </div>
        );
    }
};