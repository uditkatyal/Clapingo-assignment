import "./Login.css";
import { useRef, useState } from "react";
const Login = () => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("email");
  const getPassword = localStorage.getItem("password");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    if (email.current.value && password.current.value) {
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
    }
    setEmailState(getEmail);
    setPasswordState(getPassword);
  };
  const logOutHandler = () => {
    localStorage.clear();
    window.location = "/";
  };
  return (
    <div>
      {getEmail && getPassword ? (
        <div>
          <h1>Already Logged In</h1>
          <button onClick={logOutHandler}>Logout</button>
        </div>
      ) : (
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="login" onSubmit={onSubmitHandler}>
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input
                    autocomplete="false"
                    type="text"
                    className="login__input"
                    placeholder="Email"
                    ref={email}
                    // value={emailState}
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input
                    autocomplete="false"
                    type="password"
                    className="login__input"
                    placeholder="password"
                    ref={password}
                    // value={passwordState}
                  />
                </div>
                <button className="button login__submit">
                  <span className="button__text">Login</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Login;
