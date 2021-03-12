import { connect } from 'react-redux';
import { clearMessageErrors, createMessage, fetchMessages} from '../../actions/message_actions';
import MessagesFeed from './messages_feed';

const mapStateToProps = state => {
    return {
        messages: state.messages ? Object.values(state.messages) : [],
        errors: Object.values(state.errors.message)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMessages: () => dispatch(fetchMessages()),
        createMessage: message => dispatch(createMessage(message)),
        clearMessageErrors: () => dispatch(clearMessageErrors)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesFeed);