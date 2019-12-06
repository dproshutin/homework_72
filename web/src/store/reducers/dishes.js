import {
    DISHES_FAILURE,
    DISHES_REQUEST,
    DISHES_SUCCESS,
    DELETE_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    dishes: [],
    loading: false,
    error: null
};

const dishes = (state = initialState, action) => {
    switch (action.type) {
        case DISHES_REQUEST:
            return {...state, loading: true};
        case DISHES_SUCCESS:
            return {...state, dishes: action.dishes, loading: false};
        case DISHES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        // case DELETE_SUCCESS:
        //     return {...state, dishes: state.dishes.filter(dish => dish.id !== action.id), loading: false};
        default:
            return state;
    }
};

export default dishes;