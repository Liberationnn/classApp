import * as Types from '../action-types';

// home里存放首页所有的信息
let defaultState = {
    currentLesson: 0,
    sliders: [], //轮播图的数据
    lesson: {
        lessonList: [],
        hasMore: true, //是否有更多
        limit: 2, //每次多显示2条
        offset: 0, //偏移量
        isLoading: false //状态表示是否正在加载
    },
    scrollTop: 0
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case Types.SET_CURRENT_LESSON:
            return {
                ...state,
                currentLesson: action.val,
                lesson: {
                    ...state.lesson,
                    lessonList: [],
                    offset: 0
                },
                scrollTop: 0
            };
        case Types.GET_SLIDER:
            return {
                ...state,
                sliders: action.sliders
            };
        case Types.GET_LESSON:
            return {
                ...state,
                lesson: {
                    ...state.lesson,
                    lessonList: [
                        ...state.lesson.lessonList,
                        ...action.lesson
                    ],
                    offset: state.lesson.offset + action.lesson.length,
                    isLoading: false
                }
            };
        case Types.SET_LOADING_STATE:
            return {
                ...state,
                lesson: {
                    ...state.lesson,
                    isLoading: true
                }
            };
        case Types.SET_SCROLL_TOP:
            return {
                ...state,
                scrollTop: action.scrollTop
            };
        default:
            return state;
    }
};