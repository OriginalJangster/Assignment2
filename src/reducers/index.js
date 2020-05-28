import { combineReducers} from "redux";

const initMessages = {"messages": ["Write a thought", "Write a task", "Do whatever you want!", "Double click an item to cross off",
        "Click the 'x' button to remove the item from the board"]};

const messageListReducer = (state = initMessages, action) => {
    if (action.type === "ADD_TO_LIST") {
        return state.messages.push(action.payload);
    }
    return state;
};

const clearListReducer = (state = initMessages, action) => {
    if (action.type === "CLEAR_LIST") {
        state = {"messages": []};
        return state;
    }
    return state;
}

const displayListReducer = (state = initMessages, action) => {
    if (action.type === "DISPLAY_LIST") {
        return state;
    }
    return state;
}

const closeItemReducer = (state = action.list, action) => {
    if (action.type === 'CLOSE_ITEM') {
        return state - action.listItem;
    }
    return state;
}


export default combineReducers({
    messageList: messageListReducer,
    clearList: clearListReducer,
    displayList: displayListReducer,
    closeItem: closeItemReducer
});
