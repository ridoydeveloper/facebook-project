import { useReducer } from "react";
import LoaderContext from "../context/LoaderContext";
import LoaderReducer from "../reducers/LoaderReducer";


//initial state

 export const INITAL_STATE = 0;


// create provider
  const LoaderContextProvider = ({ children }) => {

    const [ loaderstate , loaderdispatch ] = useReducer(LoaderReducer, INITAL_STATE);

    return (
         
        <LoaderContext.Provider 
         
        value={{
          
            loaderstate,
            loaderdispatch
        }}

        >
           { children }
        </LoaderContext.Provider>

    );



  }

  // export default

  export default LoaderContextProvider;