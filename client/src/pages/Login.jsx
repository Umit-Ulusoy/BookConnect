
const Login = () => {
  return (
    <div className="login-container" style={{width:"100vw", height:"100vh"}}>
         <img />
          <div>
          <h1>Welcome Back!</h1>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              aria-label="Username"
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
          <button aria-label="Login">
            Login
          </button>
          <p>or</p>
          <button aria-label="Login with Google">Login wih Google</button>
          </div>
        </div>
      );
    };
    
  export default Login