import { connect} from 'react-redux';
import LoggedInComponent from './logged_in_component';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => {
    return{
        signedIn: !!state.session.user,
        currentUser: state.session.user,
        
    }
    
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(LoggedInComponent);