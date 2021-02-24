import { connect} from 'react-redux';
import LoggedInComponent from './logged_in_component';

const mapStateToProps = (state) => {
    return{
        signedIn: !!state.session.user,
        currentUser: state.session.user
    }
};
   

export default connect(mapStateToProps)(LoggedInComponent);