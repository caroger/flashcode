import { connect } from 'react-redux';
import LeftNav from './left_nav';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        signedIn: !!state.session.user,
        currentUser: state.session.user,
    }

};

const mapDispatchToProps = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal))
});



export default connect( mapStateToProps,mapDispatchToProps)(LeftNav);