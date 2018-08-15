import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home';
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Swipe from '../../components/Swipe/Swipe';
import LessonList from "../../components/LessonList/LessonList";
import ScrollList from "../../components/ScrollList/ScrollList";

class Home extends Component {
    chooseLesson = (type) => {
        this.props.setCurrentLesson(type);
        this.props.getLesson();
        this.refs.scroll.scrollTop = 0;
    };

    componentDidMount () {
        this.props.getSlider();
        if (!this.props.home.lesson.lessonList.length) {
            this.props.getLesson();
        }
        this.refs.scroll.scrollTop = this.props.home.scrollTop;
    }

    componentWillUnmount () {
        this.props.setScrollTop(this.refs.scroll.scrollTop);
    }

    render() {
        return (
            <div>
                <HomeHeader chooseLesson={this.chooseLesson}/>
                <div className="content" ref="scroll">
                    <ScrollList element={this.refs.scroll} isLoading={this.props.home.lesson.isLoading} hasMore={this.props.home.lesson.hasMore} getLesson={this.props.getLesson}>
                        <Swipe sliders={this.props.home.sliders}/>
                        <LessonList lesson={this.props.home.lesson}/>
                    </ScrollList>
                </div>
            </div>
        );
    }
}

// mapStateToProps 将redux中的数据变成属性
// mapDispatchToProps 可以直接传一个actionCreate的对象
export default connect(state => ({...state}), action)(Home);