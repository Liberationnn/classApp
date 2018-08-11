import * as Types from '../action-types';
import sliders from '../../mock/slider';
import lesson from '../../mock/lessonList';

export const setCurrentLesson = (val) => ({
    type: Types.SET_CURRENT_LESSON,
    val
});

export const getSlider = () => ({
    type: Types.GET_SLIDER,
    sliders
});

export const getLesson = () => (dispatch, getState) => {
    dispatch({
        type: Types.SET_LOADING_STATE
    });
    dispatch({
        type: Types.GET_LESSON,
        ...lesson
    });
};