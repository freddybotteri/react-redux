import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUsuario = (state) => state.usuario;

const makeSelectUsuario = () => createSelector(
  selectUsuario,
  (state) => state.usuario
);

const makeSelectReposUsuario = () => createSelector(
  selectUsuario,
  (state) => state.userData.repositories
);

const makeSelectUsuarioLoading = () => createSelector(
  selectUsuario,
  (state) => state.loading
);

const makeSelectUsuarioError = () => createSelector(
  selectUsuario,
  (state) => state.error
);

export {
  selectUsuario,
  makeSelectUsuario,
  makeSelectReposUsuario,
  makeSelectUsuarioLoading,
  makeSelectUsuarioError
};






