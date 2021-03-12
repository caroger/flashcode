import {
    RECEIVE_MESSAGES,
    RECEIVE_NEW_MESSAGE    
} from '../actions/message_actions';

const MessagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_MESSAGES:
            newState = action.messages.data;
            return newState;
        case RECEIVE_NEW_MESSAGE:
            newState[action.message.id] = action.message.data;
            return newState;
        default: 
            return state;
    }
}

export default MessagesReducer;
