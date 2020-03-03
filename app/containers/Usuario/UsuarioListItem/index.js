import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import UsuarioListItem from './UsuarioListItem';

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser()
  })
)(UsuarioListItem);
