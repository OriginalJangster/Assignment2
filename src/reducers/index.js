import { combineReducers} from "redux";

// one state so one reducer only ( 1 reducer / state)

const initMessages = {"messages": ["Write a thought", "Write a task", "Do whatever you want!", "Double click an item to cross off",
        "Click the 'x' button to remove the item from the board"]};
const clearedMessages = {"messages": []};
const initActive = initMessages.messages[0];

const messageListReducer = (state = initMessages, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            console.log("HERE");
            let newMessages = {"messages": [...state.messages, action.payload]};
            console.log(state);
            return newMessages;

        case 'CLEAR_LIST':
            return clearedMessages;

        default:
            return state;
    }
};

const messageReducer = (state = initActive, action) => {
    switch (action.type) {
        case 'VIEW_DETAILS':
            return action.payload;

        default:
            return state;
    }
};

// don't need to combine reducer if only 1 reducer
export default combineReducers({
    list: messageListReducer,
    listItem: messageReducer
});
