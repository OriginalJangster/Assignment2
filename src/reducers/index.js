import { combineReducers} from "redux";

// one state so one reducer only ( 1 reducer / state)

const initMessages = {"messages": ["Write a thought", "Write a task", "Do whatever you want!", "Double click an item to cross off",
        "Click the 'x' button to remove the item from the board"]};
const clearedMessages = {"messages": []};

const messageListReducer = (state = initMessages, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            return state.messages.push(action.payload);

        case 'CLEAR_LIST':
            return clearedMessages;

        default:
            return state;
    }
};

// const closeItemReducer = (state = action.list, action) => {
//     if (action.type === 'CLOSE_ITEM') {
//         return state - action.listItem;
//     }
//     return state;
// }

// don't need to combine reducer if only 1 reducer
export default combineReducers({
    list: messageListReducer
});
