import { Route, Routes,} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from './pages/Register/Register';
import './App.scss';
import AuthenticateUser from "./middlewares/AuthenticateUser";
import AuthRedirectUser from "./middlewares/AuthRedirectUser";
import swal from 'sweetalert';
import { useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "./context/AuthContext";
import Cookies from "js-cookie";

import LoadingBar from 'react-top-loading-bar'
import LoaderContext from "./context/LoaderContext";
import Verify from "./components/verify/Verify";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

function App() {


  //get auth context

  const { dispatch } = useContext(AuthContext);
  
  //get loader context

  const { loaderstate, loaderdispatch} = useContext(LoaderContext);

  //get token

  const token = Cookies.get('token');


// check logged in user

     useEffect( () => {

    try {

       axios.get('http://localhost:5050/api/user/me',{
       headers : {
        "Authorization" : `Bearer ${token}`
      }
      
      })
      .then( res => {

        if( res.data.isVerified && token ){


          dispatch({ type : 'LOGIN_USER_SUCCESS' , payload : res.data });

        }else{
          
          
          swal("warning!", "Please verify your account", "warning");
          Cookies.remove('token');
        }

       

      })
      .catch(error => {
        
        dispatch({type : 'USER_LOGOUT'});
       
      })
      
    } catch (error) {

     console.log(error);
      
    }

  }, [token]);

  return (
<>


    <LoadingBar
        color='#f11946'
        progress={loaderstate}
        onLoaderFinished={() => loaderdispatch({ type : "LOADER_END"})}
      />

    <Routes>
    <Route path="/register" element={ <AuthRedirectUser> <Register/> </AuthRedirectUser> }/>
      <Route path="/login" element={ <AuthRedirectUser> <Login/> </AuthRedirectUser> }/>
      <Route path="/:id" element={ <AuthenticateUser> <Profile/> </AuthenticateUser> }/>
      <Route path="/" element={ <AuthenticateUser><Home/> </AuthenticateUser> }/>
      <Route path="/user/:id/verify/:token" element={ <Verify /> } />
      <Route path="/forgot-password" element={ <ForgotPass/> } />
      <Route path="/password-recover/:token" element={ <ResetPassword/> } />

      
     
    </Routes>

</>
  );
}

export default App;
