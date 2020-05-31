
export const addToList = message => {
    return {
        type: 'ADD_TO_LIST',
        payload: message
    };
};

export const deleteFromList = item => {
    return {
        type: 'DELETE_FROM_LIST',
        payload: item
    }
}

export const clearList = () => {
    return {
        type: 'CLEAR_LIST'
    };
};

export const viewDetails = (item, messages) => {
    return {
        type: 'VIEW_DETAILS',
        payload: item,
        totalMessages: messages
    }
}

export const editItem = (text, item) => {
    return {
        type: 'EDIT_ITEM',
        payload: text,
        item: item
    }
}