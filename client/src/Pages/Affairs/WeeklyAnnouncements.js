import React from 'react';
import NavBar from "../../Components/Navbar"; // Import the NavBar component
import '../../Styles/WeeklyAnnouncements.css'; // Import the CSS file for styling
import Footer from "../../Components/Footer";

const WeeklyAnnouncements = () => {
  return (
    <div className='weekly-body'>
      <NavBar /> 
      <div className="center-container">
        <h2 className="titleweekly" style={{textAlign: 'center'}}>Weekly Announcements</h2>
      </div>
      <div className="center-container" style={{marginLeft: '180px'}}> 
        <iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/25408455' frameborder='0' width='90%' height='1000'></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default WeeklyAnnouncements;
