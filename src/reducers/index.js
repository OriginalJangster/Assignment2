import { combineReducers} from "redux";

// one state so one reducer only ( 1 reducer / state)
const initMessages = {"messages": ["Write a thought", "Write a task", "Do whatever you want!", "Clear the entire list to start over",
        "Click the 'delete' button to remove the item from the board"]};
const clearedMessages = {"messages": []};

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

        case 'EDIT_ITEM': {
            let index = 0;
            for (let i = 0; i < state.messages.length; i++) {
                if (state.messages[i] === action.item)
                    index = i;
            }
            let editedMessages = {...state};
            editedMessages.messages[index] = action.payload;
            console.log(editedMessages.messages);
            return editedMessages;
        }

        default:
            return state;
    }
};

// don't need to combine reducer if only 1 reducer
export default combineReducers({
    list: messageListReducer
});
