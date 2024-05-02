import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar"
import "../Styles/Signup.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup() {

  const [accountData, setAccountData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAccountData({
        ...accountData,
        [name]: value,
    });
  };

  const handleCreate = (event) => {
    // if (
    //   accountData.role === '' ||
    //   accountData.firstName === '' ||
    //   accountData.lastName === '' ||
    //   accountData.email === '' ||
    //   accountData.password === '' ||
    //   accountData.confirmPassword === ''
    // ) {
    //   alert('Please fill in all required fields.');
    // } else if (accountData.password !== accountData.confirmPassword) {
    //   alert('Passwords do not match.');
    // } else {
    //   setAccountData((prevData) => ({
    //     ...prevData,
    //     password: accountData.password, // Update password in accountData
    //   }));
    //   // console.log('Creating account:', accountData);
    //   fetch("http://localhost:5000/createUser", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(accountData),
    //   })
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log("Success:", data);
    //       console.log(accountData);
    //       navigate('/')
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });

      // navigate('/'); // Redirect to login page after successful account creation
      event.preventDefault(); // Prevent default form submission
      console.table(accountData)
    }

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
                <input type="text" placeholder="First" name="firstName" onChange={handleInputChange}></input>
                <input type="text" placeholder="Last" name="lastName" onChange={handleInputChange}></input>
              </span>
              <input type="email" placeholder="Email" name="email" onChange={handleInputChange}></input>
              <input type="password" placeholder="Password" name="password" onChange={handleInputChange}></input>
              <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleInputChange}></input>
              <input type="submit" value="Create Account" className="register-button" onClick={handleCreate}></input>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;