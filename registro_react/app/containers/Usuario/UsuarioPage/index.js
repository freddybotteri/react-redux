import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectReposUsuario,
  makeSelectUsuarioLoading,
  makeSelectUsuarioError
} from './selectors';
import { loadRepos } from '../../App/actions';
import { usuarioList,usuarioText } from './actions';
import { makeSelectUsuario } from './selectors';
import reducer from './reducer';
import saga from './saga';
import UsuarioPage from './UsuarioPage';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(usuarioText(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(usuarioList());
  }
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectReposUsuario(),
  username: makeSelectUsuario(),
  loading: makeSelectUsuarioLoading(),
  error: makeSelectUsuarioError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);



const withReducer = injectReducer({ key: 'usuario', reducer });
const withSaga = injectSaga({ key: 'usuario', saga });

export default compose(withReducer, withSaga, withConnect)(UsuarioPage);
export { mapDispatchToProps };
