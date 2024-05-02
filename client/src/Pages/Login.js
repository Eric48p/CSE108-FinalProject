import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar"
import "../Styles/Login.css"

import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Login() {

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
        ...loginData,
        [name]: value,
    });
  };

  // Send email and password to backend to verify credentials
  const handleLogin = async (event) => {
    event.preventDefault();
    if (loginData.email.trim() !== '' && loginData.password.trim() !== '') {
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data.user); // Logged in successfully
          localStorage.setItem('user', JSON.stringify(data.user)); // Store user data in local storage
          // Redirect to the desired page after successful login
          // navigate('/MyCourses')
          console.log("Login Successful")

        } else {
          alert(data.error); // Display the error message from the backend
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Email or Password Incorrect.');
      console.log('Email or password is empty');
    }
  };


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
              <input type="email" placeholder="Email" name="email" onChange={handleInputChange}></input>
              <input type="password" placeholder="Password" name="password" onChange={handleInputChange}></input>
              <span className="login-form-remember">
                <input type="checkbox"></input>
                <label>Remember Me</label>
              </span>
              <span className="login-form-buttons">
                <input type="submit" value="Login" className="login-button" onClick={handleLogin}></input>
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