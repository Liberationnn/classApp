import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './LessonList.css';

export default class LessonList extends Component {
    render() {
        let {lessonList} = this.props.lesson;
        // let {hasMore, isLoading, lessonList} = this.props.lesson;
        let temp = (
            lessonList.map((item, index) => (
                // 跳转详情页，并且带上数据
                <Link to={{pathname: '/detail', state: item}} key={index}>
                    <div className="lesson-list-item">
                        <img src={item.url} alt=""/>
                        <p>{item.lesson}</p>
                        <span>{item.price}</span>
                    </div>
                </Link>
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