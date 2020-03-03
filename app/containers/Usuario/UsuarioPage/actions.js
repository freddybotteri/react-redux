/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { USUARIO_TEXT,USUARIO_ADD,USUARIO_ADD_FAIL,USUARIO_ADD_SUCCESS,
 USUARIO_LIST,USUARIO_LIST_FAIL,USUARIO_LIST_SUCCESS} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */

export function usuarioText(usuario) {
  return {
    type: USUARIO_TEXT,
    usuario
  };
}

export function usuarioAdd() {
  return {
    type: USUARIO_ADD
  };
}

export function usuarioLoaded(repos, usuario) {
  return {
    type: USUARIO_ADD_SUCCESS,
    repos,
    usuario,
  };
}

export function usuarioLoadingError(error) {
  return {
    type: USUARIO_ADD_FAIL,
    error,
  };
}



export function usuarioList() {
  return {
    type: USUARIO_LIST
  };
}

export function usuarioListLoaded(repos, usuario) {
  return {
    type: USUARIO_LIST_SUCCESS,
    repos,
    usuario,
  };
}

export function usuarioListLoadingError(error) {
  return {
    type: USUARIO_LIST_FAIL,
    error,
  };
}
