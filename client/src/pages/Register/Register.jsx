import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './Register.scss';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Register = () => {
 



  //state for form fields

  const [ input , setInput ] = useState({

   name     : '',
   username : '',
   email    : '',
   password : '',
 
  });

  const handleInput = (e) => {

    setInput((prev) => ({ ...prev, [e.target.name] : e.target.value}));

  };


  const handleUserRegister = async (e) => {

    e.preventDefault();

    try {
      
      if( !input.name || !input.username || !input.email || !input.password ){


        swal("Danger!", "All fields are required", "error");

      }else {

       await axios.post('http://localhost:5050/api/user/register' , input).then(res => {

       setInput((prev) => ({

        name : '',
        email : '',
        username : '',
        password :''

       }));

       swal("Success!", "Your account created", "success");

        });
     
      }

    } catch (error) {

      swal("Danger!", "Your account created fail", "error");

      console.log(error);
    }

  }




  return (

    <div className="register-container">


          <ToastContainer

          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover

          />

        <a href="#" className='register-logo-link'>
           <img className='register-logo' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
        </a>

      <div className="register-waper">



      
        <form onSubmit={handleUserRegister} className='register-form' action="">




        <div className="redister-text-top">
       
        <span className='register-text-1'>Create a new account</span>
        <span className='register-text-2'>It's quick and easy.</span>

        </div>
        

        <br />
           

         {/* Input section start */}

          <div className="input-name">
          
          <input name='name' onChange={ handleInput } className='register-input-name' type="text" value={ input.name} placeholder='Name'/>
         <input name='username' onChange={ handleInput } className='register-input-name' type="text" value={ input.username} placeholder='username'/>

          </div>

         <div className="number-or-pass">
           
         <input name='email' onChange={ handleInput } className='register-input' type="text" value={ input.email }  placeholder='Email address or phone number' />
         <input name='password' onChange={ handleInput } className='register-input' type="text" value={ input.password } placeholder='New Password' />
          
          </div> 
        
          
       

         {/* Input section end  */}

         {/* date of birth section start */}

         <span className='bitrh-text'>Date of Birth</span>

         <div className="date-of-birth-section">
         
        <select className='day' name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
          <option value="">11</option>
          <option value="">12</option>
          <option value="">14</option>
          <option value="">15</option>
          <option value="">16</option>
          <option value="">17</option>
          <option value="">18</option>
          <option value="">19</option>
          <option value="">20</option>
          <option value="">21</option>
          <option value="">22</option>
          <option value="">23</option>
          <option value="">24</option>
          <option value="">25</option>
          <option value="">26</option>
          <option value="">27</option>
          <option value="">28</option>
          <option value="">29</option>
          <option value="">30</option>
          <option value="">31</option>
         </select>
         
         <select className='month' id="">
          <option value="">Jan</option>
          <option value="">Feb</option>
          <option value="">Mar</option>
          <option value="">Apr</option>
          <option value="">May</option>
          <option value="">Jun</option>
          <option value="">Jul</option>
          <option value="">Aug</option>
          <option value="">Sep</option>
          <option value="">Oct</option>
          <option value="">Nov</option>
          <option value="">Dec</option>
          
         </select>

         <select className='years' id="">

          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>

         </select>

       </div>

            {/* Date of Birth section end */}

            {/* Gender section start */}

            <span className='gender-text'>Gender</span>

            <div className="gender-section">
             

              <div className="female" id="all_gender">
          <label for="female"><b>Female</b> </label>
          <input type="radio" className='gender' value="female" />
        </div>
        <div className="male" id="all_gender">
          <label for="male"><b>Male</b></label>
          <input type="radio" className='gender' value="male" />
        </div>

        <div className="other" id="all_gender">
          <label for="custom"><b>Custom</b></label>
          <input type="radio" className='gender' value="custom" />
        </div>
        

            </div>


        <div className="form-text">People who use our service may have uploaded your contact information to Facebook.  <a href="#" className='form-text-link'>Learn More</a></div>
        
        <div className="form-text">By clicking Sign Up, you agree to our <a href="#" className='form-text-link'>Terms,</a><a href="#" className='form-text-link'> Privacy</a><a href="#" className='form-text-link'>Policy</a> and <a href="#" className='form-text-link'>Cookies Policy. </a>You may receive SMS notifications from us and can opt out at any time.</div>


           
        <div className="form-submit-btn">
        
        <button type='submit' className='register-submit' >Sign Up</button>
        
        </div>

        <div className="register-forgotten-sign">
      
      <Link className='Already-account-btn' to="/login" href="">Already have an account?</Link>
      

      </div>

        
      </form>

     

      {/* Input section end */}

     




      </div>

    </div>
  )
}

export default Register;





