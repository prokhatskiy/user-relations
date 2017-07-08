import { connect } from 'react-redux';
import UserBar from '../components/UserBar';
import { signIn, signOut } from '../../actions/auth';

const mapStateToProps = ({ users: { items }, auth }) => ({
    usersMap: items,
    auth
});

const mapDispatchToProps = dispatch => ({
    onSignIn(...args) {
        return dispatch(signIn(...args));
    },
    onSignOut() {
        return dispatch(signOut());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);
