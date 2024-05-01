import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar"
import "../Styles/Signup.css"


function Signup() {


  return(
    <>
      <NavBar />
      <div className="signup-body">
        <div className="signup-image">
          <img src="/Images/shpeNationalConvention2023.jpg"></img>
        </div>
        <div className="signup-form-body">
          <div className="signup-form">
            <p>Register</p>
            <form>
              <span>
                <input type="text" placeholder="First"></input>
                <input type="text" placeholder="Last"></input>
              </span>
              <input type="email" placeholder="Email"></input>
              <input type="password" placeholder="Password"></input>
              <input type="password" placeholder="Confirm Password"></input>
              <input type="submit" value="Create Account" className="register-button"></input>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;