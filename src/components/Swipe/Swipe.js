import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './swipe.css';

export default class Swipe extends Component {
    constructor(props) {
        super(props);
        this.state = {index: 0};
    }

    render() {
        let opts = {
            callback: (index) => {
                this.setState({index});
            }
        };

        let swipe = (
            <div className="swiper">
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    {
                        this.props.sliders.map((slider, index) => (
                            <img key={index} src={slider} alt=""/>
                        ))
                    }

                </ReactSwipe>
                <div className="dots">
                    {
                        this.props.sliders.map((slider, index) => (
                            <span key={index} className={this.state.index === index ? 'active' : ''}></span>
                        ))
                    }
                </div>
            </div>
        );

        return (
            <div>
                {this.props.sliders.length ? swipe : null}
            </div>
        );
    }
};