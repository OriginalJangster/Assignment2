export const addToList = message => {
    return {
        type: 'ADD_TO_LIST',
        // below here is payload data, so data you pass to the reducer to handle action
        payload: message
    };
};

export const clearList = () => {
    return {
        type: 'CLEAR_LIST'
    };
};

export const displayList = () => {
    return {
        type: 'DISPLAY_LIST'
    }
}

export const closeButton = listItem => {
    return {
        type: 'CLOSE_BUTTON',
        payload: listItem
    }
}

export const closeItem = (list, listItem) => {
    return {
        type: 'CLOSE_ITEM',
        list: list,
        listItem: listItem
    }
}

export const addCheckMark = listItem => {
    return {
        type: 'ADD_CHECK_MARK',
        payload: listItem
    }
}