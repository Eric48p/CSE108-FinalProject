import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar"
import "../Styles/Login.css"


function Login() {


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
              <span>
                <input type="submit" value="Login" className="login-button"></input>
                <input type="submit" value="Sign Up" className="signup-button"></input>
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