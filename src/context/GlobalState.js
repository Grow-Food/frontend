import React, {createContext, useReducer} from 'react';

// global app reducer
import AppReducer from './AppReducer';

// build initial state
const initialState = {
  user: {
    email: '',
    authLevel: 0,
    accessToken: '',
    refreshToken: ''
  },
  sidebar: {
    visible: true
  }
};

// create the global context using initialState
export const GlobalContext = createContext(initialState);

// create the global state provider component (to wrap the app)
export const GlobalProvider = ({children}) => {
  // hook up reducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions go here
  function setSidebarVisible(visible) {
    dispatch({type: "SET_SIDEBAR_VISIBLE", payload: !visible});
  }

  return (
    <GlobalContext.Provider value={{user: state.user, sidebar: state.sidebar, setSidebarVisible}}>
      {children}
    </GlobalContext.Provider>
  );
};
