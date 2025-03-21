import { createContext, useReducer } from "react";
import Reducer from "../reducer/Reducer";

const INITAIL_STATE = {isLogin: false, message: ''};

export const Context = createContext(INITAIL_STATE);

export const ContextProvider = ({children}) => {
  const [ state, dispatch ] = useReducer(Reducer, INITAIL_STATE);

  return (
    <Context.Provider 
      value={{
        state,
        dispatch,
      }} >
      {children}
    </Context.Provider>
  );
}

export default Context;