import { combineReducers} from "redux";

// one state so one reducer only ( 1 reducer / state)
const initMessages = {
    messages: [],
    loading: false
}

const messageListReducer = (state = initMessages, action) => {
    switch (action.type) {
        case 'GET_MESSAGES':
            return {
                ...state,
                messages: action.payload,
                loading: false
            };
        case 'ADD_TO_LIST': {
            if (state.messages.includes(action.payload.message)) {
                alert('You already have this message!');
                console.log(state.messages);
                return state;
            } else {
                return {...state, messages: [action.payload, ...state.messages]}
            }
        }
        case 'CLEAR_LIST': {
            return {...state, messages: [action.payload]};
        }
        case 'DELETE_FROM_LIST': {
            console.log(action.payload);
            return {...state, messages: [state.messages.filter(el => el._id !== action.payload._id)]};
        }
        case 'EDIT_ITEM': {
            for (let i = 0; i < state.messages.length; i++) {
                if (state.messages.includes(action.payload.message)) {
                    alert('You already have this message!');
                    return state;
                }
            }
            return {...state, messages: [
                (state.messages.find(el => el._id === action.id).message = action.payload.message),
                    ...state.messages]};
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
