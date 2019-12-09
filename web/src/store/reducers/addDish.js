import {
    INPUT_CHANGE,
    ADD_NEW_DISH_REQUEST,
    ADD_NEW_DISH_SUCCESS,
    ADD_NEW_DISH_FAILURE,
    DISH_EDIT
} from "../actions/actionTypes";


const initialState = {
    newDish: {
        title: "",
        price: "",
        photo: ""
    },
    dishToEdit: {
        id: "",
        title: "",
        price: "",
        photo: ""
    },
    loading: false,
    error: null
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
            return {...state, newDish: {}, loading: false};
        case ADD_NEW_DISH_FAILURE:
            return {
                ...state,
                newDish: {},
                loading: false,
                error: action.error
            };
        case DISH_EDIT:
            action.input.history.push("/dishes/" + action.selectedDish.id + "/edit")
            return {...state, newDish: action.selectedDish};
        default:
            return state;
    }
};

export default addDish;