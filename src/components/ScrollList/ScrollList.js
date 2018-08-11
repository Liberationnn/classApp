import React, {Component} from 'react';

// 可以接受几个参数
// element：滚动元素
// isLoading：是否正在加载
// hasMore：是否有更多lesson
// loadMore：获取更多lesson的方法
export default class ScrollList extends Component {
    componentDidMount() {
        setTimeout(() => {
            let {element, isLoading, hasMore, getLesson} = this.props;
            element.addEventListener('scroll', () => {
                let {scrollTop, offsetHeight, scrollHeight} = this.props.element;
                if (!isLoading && hasMore && (scrollTop + offsetHeight + offsetHeight / 10 >= scrollHeight)) {
                    getLesson();
                }
            });
        }, 0);
    }

    render() {
        return (
            <div className="scroll-list">
                {this.props.children}
            </div>
        );
    }
};