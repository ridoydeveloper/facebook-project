import React from 'react';
import './Login.scss';




const Login = () => {



  return (


    
    <div className="login-container">

       <a href="#" className='login-logo-link'>

       <img className='login-logo' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />

        </a>

      <div className="login-waper">
      
    

      <form className='login-form' action="">
        <span className='login-text'>Log in to Facebook</span>
        <input className='login-input' type="text" placeholder='Email address or phone number' />
        <input className='login-input' type="text" placeholder='Password' />
        <button className='login-submit' type='submit'>Log In</button>
      </form>

      <div className="login-forgotten-sign">
      
      <a className='Forgotten-account' href="">Forgotten account?</a>
      <a className='sign-up-for-facebook' href="">Sign up for Facebook</a>

      </div>

      </div>

    </div>


  )



}

export default Login;