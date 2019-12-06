import {
    INPUT_CHANGE,
    ADD_NEW_DISH_REQUEST,
    ADD_NEW_DISH_SUCCESS,
    ADD_NEW_DISH_FAILURE
} from "../actions/actionTypes";


const initialState = {
    newDish: {
        title: "",
        price: "",
        photo: ""
    },
    loading: false
};

const addDish = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            let newDish = {...state.newDish};
            newDish[action.e.target.name] = action.e.target.value;
            return {...state, newDish};
        case ADD_NEW_DISH_REQUEST:
            return {...state, loading: true};
        case ADD_NEW_DISH_SUCCESS:
            action.input.history.push('/');
            return {...state, newDish: {}, loading: false};
        case ADD_NEW_DISH_FAILURE:
            action.input.history.push('/');
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default addDish;