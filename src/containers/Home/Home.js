import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import * as action from '../../redux/actions/home';
import Swipe from '../../components/Swipe/Swipe';
import Lesson from "../../components/Lesson/Lesson";
import ScrollList from "../../components/ScrollList/ScrollList";

class Home extends Component {
    chooseLesson = (type) => {
        this.props.setCurrentLesson(type);
    };

    componentDidMount () {
        this.props.getSlider();
        this.props.getLesson();
    }

    render() {
        return (
            <div>
                <HomeHeader chooseLesson={this.chooseLesson}/>
                <div className="content" ref="scroll">
                    <ScrollList element={this.refs.scroll} isLoading={this.props.home.lesson.isLoading} hasMore={this.props.home.lesson.hasMore} getLesson={this.props.getLesson}>
                        <Swipe sliders={this.props.home.sliders}/>
                        <Lesson lesson={this.props.home.lesson}/>
                    </ScrollList>
                </div>
            </div>
        );
    }
}

// mapStateToProps 将redux中的数据变成属性
// mapDispatchToProps 可以直接传一个actionCreate的对象
export default connect(state => ({...state}), action)(Home);