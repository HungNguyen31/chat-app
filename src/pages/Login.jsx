import React from 'react'
import Add from '../img/addAvatar.png'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='title'>Login</span>
            <form action="">
                <input type="email" placeholder='Enter email'/>
                <input type="password" placeholder='Enter password'/>
                <button>Sign In</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login