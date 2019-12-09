import axios from '../../axios-homework-72';

import {
    ADD_NEW_DISH_REQUEST,
    ADD_NEW_DISH_SUCCESS,
    ADD_NEW_DISH_FAILURE,
    INPUT_CHANGE,
    DISHES_REQUEST,
    DISHES_SUCCESS,
    DISHES_FAILURE,
    DELETE_SUCCESS,
    DISH_EDIT
} from './actionTypes';

export const addNewDishRequest = () => {
    return {type: ADD_NEW_DISH_REQUEST};
};

export const addNewDishSuccess = () => {
    return {type: ADD_NEW_DISH_SUCCESS};
};

export const addNewDishFailure = (error) => {
    return {type: ADD_NEW_DISH_FAILURE, error};
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

export const addNewDish = () => {
    return (dispatch, getState) => {
        const newDish = getState().addDish.newDish;
        if (Object.keys(newDish).length === 3) {
            console.log(Object.keys(newDish));
            dispatch(addNewDishRequest());
            return axios.post('/dishes.json', newDish).then(response => {
                dispatch(addNewDishSuccess());
            }, err => {
                dispatch(addNewDishFailure(err));
            });
        } else if (Object.keys(newDish).length === 4) {
            console.log(Object.keys(newDish));
            dispatch(addNewDishRequest());
            const editedDish = {};
            editedDish[newDish.id] = {
                title: newDish.title,
                price: newDish.price,
                photo: newDish.photo
            };
            console.log(editedDish);
            return axios.put('/dishes.json', editedDish).then(response => {
                dispatch(addNewDishSuccess());
            }, err => {
                dispatch(addNewDishFailure(err));
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
            if (obj !== null) {
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
export const editDishHandler = (id, input) => {
    return (dispatch, getState) => {
        const selectedDish = getState().dishes.dishes.filter(dish => dish.id === id)[0];
        dispatch({type: DISH_EDIT, selectedDish, input});
        console.log("dispatch");
        let p = new Promise((resolve, reject) => {
            // ...code that does something, ultimately calls either resolve or reject
            resolve();
        });
        console.log(p);
        return p;
    };
};