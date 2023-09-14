import React from 'react'

const Register = () => {
  return (
    <div className="register-container">
         <img />
          <div>
          <h1>Create an Account</h1>
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              aria-label="Username"
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <div>
          <button aria-label="Create Account">
            Create Account
          </button>
          <p>or</p>
          <button aria-label="Sign up with Google">Sign up wih Google</button>
          </div>
        </div>
  )
}

export default Register