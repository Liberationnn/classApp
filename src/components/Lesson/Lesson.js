import React, {Component} from 'react';
import './lesson.css';

export default class Lesson extends Component {
    render() {
        let {lessonList} = this.props.lesson;
        // let {hasMore, isLoading, lessonList} = this.props.lesson;
        let temp = (
            lessonList.map((item, index) => (
                <div key={index} className="lesson-list-item">
                    <img src={item.url} alt=""/>
                    <p>{item.lesson}</p>
                    <span>{item.price}</span>
                </div>
            ))
        );

        return (
            <div className="lesson-list">
                <h3><i className="iconfont icon-kecheng-copy"></i>全部课程</h3>
                {
                    lessonList.length ? temp : null
                }
            </div>
        );
    }
};