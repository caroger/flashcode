import { connect} from 'react-redux';
import LoggedInComponent from './logged_in_component';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return{
        signedIn: !!state.session.user,
        currentUser: state.session.user,
        deck: ownProps.match.params.deckId 
    }
    
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: (modal) => dispatch(closeModal(modal))
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(LoggedInComponent);