import { combineReducers} from "redux";

// one state so one reducer only ( 1 reducer / state)
const initMessages = {"messages": ["Write a thought", "Write a task", "Do whatever you want!", "Clear the entire list to start over",
        "Click the 'delete' button to remove the item from the board"]};
const clearedMessages = {"messages": []};
const initActive = initMessages.messages[0];

const messageListReducer = (state = initMessages, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            let newMessages = {"messages": [...state.messages, action.payload]};
            return newMessages;

        case 'CLEAR_LIST':
            return clearedMessages;

        case 'DELETE_FROM_LIST': {
            let activeMessage = "";
            for (let i = 0; i < state.messages.length; i++) {
                if (state.messages[i] === action.payload)
                    activeMessage = action.payload;
            }
            let remainingMessages = {"messages": [...state.messages.filter(el => el !== activeMessage)]};
            return remainingMessages;
        }

        default:
            return state;
    }
};

const messageReducer = (state = initActive, action) => {
    switch (action.type) {
        case 'VIEW_DETAILS': {
            let activeMessage = "";
            for (let i = 0; i < action.totalMessages.length; i++) {
                if (action.totalMessages[i] === action.payload)
                activeMessage = action.payload;
            }
            return activeMessage;
        }

        case 'EDIT_ITEM': {
            let updatedItem = action.item + " " + action.payload;
            return updatedItem;
        }

        default:
            return state;
    }
};

// don't need to combine reducer if only 1 reducer
export default combineReducers({
    list: messageListReducer,
    item: messageReducer
});
