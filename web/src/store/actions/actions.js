import axios from '../../axios-homework-72';

import {
    ADD_NEW_DISH_REQUEST,
    ADD_NEW_DISH_SUCCESS,
    ADD_NEW_DISH_FAILURE,
    INPUT_CHANGE
} from './actionTypes';

export const addNewDishRequest = () => {
    return {type: ADD_NEW_DISH_REQUEST};
};

export const addNewDishSuccess = (input) => {
    return {type: ADD_NEW_DISH_SUCCESS, input};
};

export const addNewDishFailure = (error, input) => {
    return {type: ADD_NEW_DISH_FAILURE, error, input};
};

export const addNewDish = (input) => {
    return (dispatch, getState) => {
        const newDish = getState().addDish.newDish;
        if (Object.keys(newDish).length === 3) {
            dispatch(addNewDishRequest());
            axios.post('/dishes.json', newDish).then(response => {
                dispatch(addNewDishSuccess(input));
            }, err => {
                dispatch(addNewDishFailure(err, input));
            });
        } else {
            return;
        }

    };
};

export const valueChanged = (e) => {
    e.persist();
    return {type: INPUT_CHANGE, e};
};