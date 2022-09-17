


// create auth

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const AuthRedirectUser = ({children}) => {


    const { isUserLoggedIn } = useContext(AuthContext);

    return isUserLoggedIn ?  <Navigate to="/" /> : children;


}



// export middileware

 export default AuthRedirectUser;