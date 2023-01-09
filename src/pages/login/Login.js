import "./login.css";

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginList">
          <div className="loginTop">
            <div className="loginImgContainer">
              <img
                src="https://img.freepik.com/free-vector/lovely-space-rocket-with-flat-design_23-2147907595.jpg?w=740&t=st=1673233673~exp=1673234273~hmac=a025f292d34378f351f87a8b81411bc6e2a5747a33030b24d77e22379fb40453"
                alt=""
                className="loginImg"
              />
            </div>
            <span className="loginTitleTop">Welcome to Bardeen</span>
            <span className="loginTitleBottom">
              Let's login ot launch your automations.
            </span>
          </div>
          <form className="loginForm">
            <div className="loginFormItems">
              <input
                type="email"
                placeholder="Email Address"
                className="loginInput"
              />
            </div>
            <div className="loginFormItems">
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
              />
            </div>
            <div className="loginFormAccount">
              <span className="loginAccount">Create Account</span>
              <span className="loginAccount">Forgot Password?</span>
            </div>
            <button className="loginButton">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
