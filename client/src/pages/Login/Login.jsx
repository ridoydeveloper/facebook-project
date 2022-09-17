import React, { useState } from 'react';
import axios from 'axios';
import './Login.scss';
import swal from 'sweetalert';

import 'react-toastify/dist/ReactToastify.css';
import cookie from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import LoaderContext from '../../context/LoaderContext';


const Login = () => {

  // use auth context

  const {dispatch} = useContext(AuthContext);
  //loaser context
  const { loaderdispatch } = useContext(LoaderContext);

  //user navigate
   const navigate = useNavigate();

   // form field state

  const [ input , setInput] = useState({

    auth : '',
    password : '',

  });

  //handle input

    const handleInput = (e) => {

       setInput((prev) => ({...prev, [e.target.name] : e.target.value}));

    };


    const handleUserLogin = async (e) => {

      e.preventDefault();


      try {
        
        if( !input.auth || !input.password ){

          swal("Danger!", "All fields are required", "error");

        }else{

        await  axios.post('http://localhost:5050/api/user/login' , { email : input.auth , password : input.password})
        .then(res => {

         if(res.data.user.isVerified){

          cookie.set('token' , res.data.token);
         
          dispatch({ type : 'LOGIN_USER_SUCCESS', payload : res.data });
          
          navigate('/');
          loaderdispatch({type : "LOADER_START"});


         }else{

          swal("warning!", " verify your account", "warning");

         }

         


      

        })

         
        }
        
      } catch (error) {
        swal("Danger!", "wrong email or password", "error");
      };

    }


  return (


    
    <div className="login-container">

       <a href="#" className='login-logo-link'>

       <img className='login-logo' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />

        </a>

      <div className="login-waper">
      
    
 
      <form className='login-form' onSubmit={ handleUserLogin } action="">
        <span className='login-text'>Log in to Facebook</span>
        <input className='login-input' type="text" name='auth' value={ input.auth } onChange={ handleInput } placeholder='Email address or phone number' />
        <input className='login-input' type="text" name='password' value={ input.password } onChange={ handleInput } placeholder='Password' />
        <button className='login-submit' type='submit'>Log In</button>
      </form>

      <div className="login-forgotten-sign">
      
      <Link className='Forgotten-account' to="/forgot-password" href="">Forgotten account?</Link>
      <Link className='sign-up-for-facebook' to="/register" href="">Sign up for Facebook</Link>

      </div>

      </div>

    </div>


  )



}

export default Login;