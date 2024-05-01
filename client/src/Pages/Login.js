import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar"
import "../Styles/Login.css"

import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate()


  return(
    <>
      <NavBar />
      <div className="login-body">
        <div className="login-image">
          <img src="/Images/shpeNationalConvention2023.jpg"></img>
        </div>
        <div className="login-form-body">
          <div className="login-form">
            <p>Login</p>
            <form>
              <input type="email" placeholder="Email"></input>
              <input type="password" placeholder="Password"></input>
              <span className="login-form-remember">
                <input type="checkbox"></input>
                <label>Remember Me</label>
              </span>
              <span className="login-form-buttons">
                <input type="submit" value="Login" className="login-button"></input>
                <input type="submit" value="Sign Up" className="signup-button" onClick={() => navigate('/Register')}></input>
              </span>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;