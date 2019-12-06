import axios from '../../axios-homework-72';

import {
    ADD_NEW_DISH_REQUEST,
    ADD_NEW_DISH_SUCCESS,
    ADD_NEW_DISH_FAILURE,
    INPUT_CHANGE,
    DISHES_REQUEST,
    DISHES_SUCCESS,
    DISHES_FAILURE,
    DELETE_SUCCESS
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

export const loadDishesRequest = () => {
    return {type: DISHES_REQUEST};
};

export const loadDishesSuccess = (dishes) => {
    return {type: DISHES_SUCCESS, dishes};
};

export const loadDishesFailure = (error) => {
    return {type: DISHES_FAILURE, error};
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

export const loadDishes = () => {
    return dispatch => {
        dispatch(loadDishesRequest());
        axios.get('/dishes.json').then(response => {
            const obj = response.data;
            let dishes = [];
            if (Object.keys(obj).length > 0) {
                const ids = Object.keys(obj);
                ids.forEach(dish => {
                    dishes.push({
                        id: dish,
                        title: obj[dish].title,
                        price: obj[dish].price,
                        photo: obj[dish].photo
                    });
                });
            }
            dispatch(loadDishesSuccess(dishes));
        }, err => {
            dispatch(loadDishesFailure(err));
        });
    };
};

export const removeDish = (id) => {
    return dispatch => {
        dispatch(loadDishesRequest());
        axios.delete('/dishes/' + id + '.json').then(response => {
            dispatch(loadDishes());
        }, err => {
            dispatch(loadDishesFailure(err));
        });
    };
};