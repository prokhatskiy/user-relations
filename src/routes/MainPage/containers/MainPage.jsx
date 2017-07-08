import { connect } from 'react-redux';
import { fetchUsers } from '../../../actions/users';
import MainPage from '../components/MainPage';

const mapStateToProps = ({ users: { items, itemsOrder, page }}) => ({
    usersMap: items,
    usersOrder: itemsOrder,
    initialPage: page
});

const mapDispatchToProps = dispatch => ({
    fetchUsers(...args) {
        dispatch(fetchUsers(...args));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
