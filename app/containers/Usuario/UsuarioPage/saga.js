/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, select, takeLatest
} from 'redux-saga/effects';
import { USUARIO_LIST } from './constants';
import { usuarioListLoaded, usuarioListLoadingError } from './actions';

import axios from "axios";

import request from 'utils/request';
import { makeSelectUsuario } from 'containers/Usuario/UsuarioPage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsuario());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(usuarioLoaded(repos, username));
  } catch (err) {
    yield put(usuarioLoadingError(err));
  }
}


export function* geUsuariosSaga(context) {
    try {
      const {data}  = yield axios.post(`http://localhost:4000/graphql`, {
        query: `
          query  {
            getUsuarios {
              user_nid
              user_vnombre
              user_vtelefono
              user_vusuario
              user_sts
            }
          }
        `
      }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      console.log(data.data.getUsuarios);
      yield put(usuarioListLoaded(data.data.getUsuarios, 'fake test'));
    } catch (err) {
      // TODO: set error message
      yield put(usuarioListLoadingError(err));
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for USUARIO_ADD actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  //yield takeLatest(USUARIO_ADD, getRepos);
  yield takeLatest(USUARIO_LIST, geUsuariosSaga);
}
