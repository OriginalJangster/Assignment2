
export const addToList = message => {
    return {
        type: 'ADD_TO_LIST',
        payload: message
    };
};

export const clearList = () => {
    return {
        type: 'CLEAR_LIST'
    };
};

export const viewDetails = (itemID) => {
    return {
        type: 'VIEW_DETAILS',
        payload: itemID
    }
}

// export const setVisibilityFilter = filter => {
//     return {
//         type: 'SET_VISIBILITY',
//         filter
//     };
// };
//
// export const toggleMessage = id => {
//     return {
//         type: 'TOGGLE_MESSAGE',
//         id
//     };
// };
//
// export const visibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

// export const closeButton = listItem => {
//     return {
//         type: 'CLOSE_BUTTON',
//         payload: listItem
//     }
// }
//
// export const closeItem = (list, listItem) => {
//     return {
//         type: 'CLOSE_ITEM',
//         list: list,
//         listItem: listItem
//     }
// }
//
// export const addCheckMark = listItem => {
//     return {
//         type: 'ADD_CHECK_MARK',
//         payload: listItem
//     }
// }