
// create auth

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const AuthenticateUser = ({children}) => {


    const { isUserLoggedIn } = useContext(AuthContext);

    return isUserLoggedIn ? children : <Navigate to="/login" />


}



// export middileware

 export default AuthenticateUser;