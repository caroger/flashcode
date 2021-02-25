import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import MainPage from './main_page';

const mapStateToProps = (state) => ({
    signedIn: !!state.session.user,
    currentUser: state.session.user
});

export default connect(mapStateToProps)(MainPage);