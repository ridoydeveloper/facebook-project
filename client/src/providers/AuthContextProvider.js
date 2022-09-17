import AuthContext from "../context/AuthContext";

import { useReducer } from "react";
import AuthReducer from "../reducers/AuthReducer";

//initial state

 export const INITAL_STATE = {


    isUserLoggedIn : false,
    user  : { }

 };


// create provider
  const AuthContextProvider = ({ children }) => {

    const [ state , dispatch ] = useReducer(AuthReducer, INITAL_STATE);

    return (
         
        <AuthContext.Provider 
         
        value={{
          
          isUserLoggedIn : state.isUserLoggedIn,
            user  : state.user,
            dispatch
        }}

        >
           { children }
        </AuthContext.Provider>

    );



  }

  // export default

  export default AuthContextProvider;