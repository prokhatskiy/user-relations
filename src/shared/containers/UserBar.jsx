import { connect } from 'react-redux';
import UserBar from '../components/UserBar';
import { signIn, signOut } from '../../actions/auth';

const mapStateToProps = ({ users: { items, itemsOrder }, auth }) => ({
    users: itemsOrder.map(itemId => items[itemId]),
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
