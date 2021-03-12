import * as MessageAPI from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'; 
export const RECEIVE_NEW_MESSAGE = 'RECEIVE_NEW_MESSAGE';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';
export const CLEAR_MESSAGE_ERRORS = 'CLEAR_MESSAGE_ERRORS';

export const receiveMessages = messages => ({
    type: RECEIVE_MESSAGES,
    messages
});

export const receiveNewMessage = message => ({
    type: RECEIVE_NEW_MESSAGE,
    message
});

export const receiveMessageErrors = errors => ({
    type: RECEIVE_MESSAGE_ERRORS,
    errors
})

export const clearMessageErrors = errors => ({
    type: CLEAR_MESSAGE_ERRORS,
})

// thunk actions

export const fetchMessages = () => dispatch => {
    return MessageAPI.getMessages()
        .then(messages => dispatch(receiveMessages(messages)))
        .catch(err => {
            dispatch(receiveMessageErrors(err.response.data));
            return Promise.reject(err)
        })
}

export const createMessage = message => dispatch => {
    MessageAPI.createMessage(message)
        .then(message => dispatch(receiveNewMessage(message)))
        .catch(err => {
            dispatch(receiveMessageErrors(err.response.data));
            return Promise.reject(err);
        })
}