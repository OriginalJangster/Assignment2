import { combineReducers} from "redux";

// one state so one reducer only ( 1 reducer / state)
const initMessages = {
    messages: [],
    loading: false
};

const messageListReducer = (state = initMessages, action) => {
    switch (action.type) {
        case 'GET_MESSAGES':
            return {
                ...state,
                messages: action.payload,
                loading: false
            };
        case 'ADD_TO_LIST': {
            return {...state, messages: [action.payload, ...state.messages]}
        }
        case 'CLEAR_LIST': {
            return {...state, messages: []};
        }
        case 'DELETE_FROM_LIST': {
            let prevMessages = [...state.messages];
            let remainingMessages = prevMessages.filter(el => el._id !== action.id);
            return  {...state, messages: remainingMessages};
        }
        case 'EDIT_ITEM': {
            let edited = {...state, messages: [...state.messages]};
            edited.messages.forEach(msg => {
                if (msg._id === action.id) {
                    msg.message = action.payload;
                }
            });
            return edited;
        }
        case 'MESSAGES_LOADING':
            return {
                ...state, loading: true
            };
        default:
            return state;
    }
};

// don't need to combine reducer if only 1 reducer
export default combineReducers({
    list: messageListReducer
});
