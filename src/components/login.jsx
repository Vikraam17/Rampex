import React, { useState } from 'react';
import './login.css';

const Login = ({onSubmit}) => {
  const [formData, setFormData] = useState({email:"",password:""});

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormData({...formData,[name]:value});
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      onSubmit(formData);
    }
  return (
    <>
      <div className="fill">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>LogIn</h1>
            <div className="fields">
              <label htmlFor="">Email:</label>
              <input type="text" name='email' value={formData.email}
              onChange={handleChange}
              placeholder='Enter the Email' required />
              <label htmlFor="">Password:</label>
              <input type="password" name='password' value={formData.password}
              onChange={handleChange}
              placeholder='Enter the Password' required />
            </div>
            <button type='submit'>LogIn</button>
            <p>
              Don't have an account?
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
