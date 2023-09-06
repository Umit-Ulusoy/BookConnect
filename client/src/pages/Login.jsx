import login from "../assets/login.jpg"

const Login = () => {
  return (
    <div className='container'>
        <div className='form'>
        <label for="id">
            Name 
            <input id="name" placeholder='Username' aria-label="Username"/>
        </label>
        <label for="id">
            Password 
            <input id="name" placeholder='Password'aria-label="Password"/>
        </label>
        <button>Login</button>
    </div>
    <div>
      <img src={login} style={{width:"250px", height: "250px"}}/>
    </div>
    </div>
  )
}

export default Login