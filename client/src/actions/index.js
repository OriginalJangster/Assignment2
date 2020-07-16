import axios from 'axios';

export const getMessages = () => dispatch => {
    dispatch(setMessagesLoading());
    axios
        .get('http://localhost:5000/routes/allMsg')
        .then(res => dispatch({
            type: 'GET_MESSAGES',
            payload: res.data
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addToList = message => dispatch => {
    const req = { message };
    axios
        .post('http://localhost:5000/routes/addMsg', req)
        .then(res => dispatch({
            type: 'ADD_TO_LIST',
            payload: res.data
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteFromList = (id) => dispatch => {
    axios
        .delete(`http://localhost:5000/routes/deleteMsg/${id}`)
        .then(res => dispatch({
            type: 'DELETE_FROM_LIST',
            payload: res.data,
            id: id
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const clearList = () => dispatch => {
    axios
        .delete('http://localhost:5000/routes/deleteAll')
        .then(res => dispatch({
            type: 'CLEAR_LIST',
            payload: res.data
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const editItem = (text, id) => dispatch => {
    const req = { message: text };
    axios
        .patch(`http://localhost:5000/routes/editMsg/${id}`, req)
        .then(res => dispatch({
            type: 'EDIT_ITEM',
            payload: text,
            id: id
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setMessagesLoading = () => {
    return {
        type: 'MESSAGES_LOADING'
    };
};

export const returnErrors = (msg, status, id) => {
    return {
        type: 'GET_ERRORS',
        payload: { msg, status, id }
    };
};