import { createContext, useReducer, useEffect } from "react";

export const initialState = {
  theme: "light",
  data: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    case 'SET_DATA':
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_DATA', payload: data }))
  }, [])

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
