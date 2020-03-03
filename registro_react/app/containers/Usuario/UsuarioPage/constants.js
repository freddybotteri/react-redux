/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

//export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';

export const USUARIO_ADD = 'boilerplate/App/USUARIO_ADD';
export const USUARIO_TEXT = 'boilerplate/App/USUARIO_TEXT';
export const USUARIO_ADD_FAIL = 'boilerplate/App/USUARIO_ADD_FAIL';
export const USUARIO_ADD_SUCCESS = 'boilerplate/App/USUARIO_ADD_SUCCESS';

export const USUARIO_LIST = 'boilerplate/App/USUARIO_LIST';
export const USUARIO_LIST_FAIL = 'boilerplate/App/USUARIO_LIST_FAIL';
export const USUARIO_LIST_SUCCESS = 'boilerplate/App/USUARIO_LIST_SUCCESS';