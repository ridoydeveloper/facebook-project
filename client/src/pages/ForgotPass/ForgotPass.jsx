import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import AuthFooter from '../../components/AuthFooter/AuthFooter';
import './ForgotPass.scss';

const ForgotPass = () => {

  // email state
  const [email , setEmail] = useState('');
  const [ msg , setMsg] = useState({

    type : '',
    msg : '',
    status : false

  })


  const handlePasswordRecover = async (e) => {

    e.preventDefault();

    axios.post('http://localhost:5050/api/user/recover-password', { email })
    .then( res => {

        
     setMsg({

      type : 'success',
      msg  : 'A password recovery link send',
      status : true
     });



    })
    .catch(error => {


     setMsg({

      type : 'danger',
      msg  : 'Invalid Email or not axists',
      status : true
     });
    })

  }

  

  return (


<div className='forgot-container'>



<div className="login-wraper">
  

    <div className='forgot-text'>
      <h2>Forgot your password</h2>
      <span>Please enter your email address or mobile number and forgot your password</span>
    </div>
    {msg.status && <p className={ `alert alert-${msg.type}`}> { msg.msg } </p> }
    
  <form method='POST' onSubmit={ handlePasswordRecover }  className="login-form">

    <input type="text" value={ email } onChange={ e => setEmail(e.target.value)} className="login-input"  placeholder='Email, Phone, or Username'/>
   
    
  
 
    <div className='forgor_btn'>
    <Link className='cancel-submit' to="/login" href="">Cancel</Link>
    <button type='submit' className='login-submit'>Send Login Link</button>
    </div>

    </form>


</div>





{/* <AuthFooter/> */}
</div>

  )
}

export default ForgotPass;