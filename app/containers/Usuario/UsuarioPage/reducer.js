import { USUARIO_TEXT,USUARIO_ADD,USUARIO_ADD_FAIL,USUARIO_ADD_SUCCESS,
USUARIO_LIST,USUARIO_LIST_FAIL,USUARIO_LIST_SUCCESS } from './constants';


// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  usuario: '',
  userData: {
    repositories: false,
  },
};

function usuarioReducer(state = initialState, action) {
  switch (action.type) {
    case USUARIO_ADD:{
      // Delete prefixed '@' from the github username
      return { 
      			...state,
        		loading: true,
        		error: false,
        		userData: {
          			repositories: false,
       			}
    	}
    }

    case USUARIO_TEXT:{
      // Delete prefixed '@' from the github username
      return {  ...state,
       			usuario: action.usuario
    	}
    }

    case USUARIO_ADD_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        userData: {
          repositories: action.repos,
        }

      };
      return newState;
    }

    case USUARIO_ADD_FAIL: {
      return { ...state, error: action.error, loading: false };
    }



    case USUARIO_LIST:{
      // Delete prefixed '@' from the github username
      return { 
            ...state,
            loading: true,
            error: false,
            userData: {
                repositories: false,
             }
      }
    }
    case USUARIO_LIST_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        userData: {
          repositories: action.repos,
        }

      };
      return newState;
    }

    case USUARIO_LIST_FAIL: {
      return { ...state, error: action.error, loading: false };
    }
    
    default:
      return state;
  }
}

export default usuarioReducer;
