import { connect } from 'react-redux';
import UserPage from '../components/UserPage';

const mapStateToProps = ({ users: { items, itemsOrder}}) => ({
    usersMap: items
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
