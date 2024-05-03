import NavBar from '../Components/Navbar';
import '../Styles/Join.css';
import Footer from "../Components/Footer";

function Join() {
  return (
    <div className="Join-Body">
      <NavBar />
      <div className="Join-Body">
        <h1 style={{textAlign: 'center'}}>Join our Familia</h1>
      </div>
      <div className="Join-Test">
        <div className="Join-container">
          <div className="Join-paragraph">
            By becoming a National member you will gain access to scholarships, life-changing conferences, and networking opportunities with over 13,000+ members and 286 Student and Professional Chapters nationwide! By creating a SHPE National Account, you have the opportunity to upload your resume to then be seen by professionals around the world. Via the SHPE website, dream job/internship postings can be filtered to fit your personal interests. Attend conferences and career fairs with dream companies! Check out our Student Chapter on Catlife for Student Membership! 🐱
            <br /><br />
            1. Click the SHPE Membership Link and create a new account<br />
            2. Under "Related Links" follow the "Membership Application"<br />
            3. Click "New Membership Application"<br />
            4. Select your current title<br />
            5. Click the Region 1 area on the map until you see a drop-down menu appear under the map<br />
            6. Select your chapter from Region 1: Scroll to the last option (University of California Merced)<br />
            7. Fill out the Contact, Information, and Release forms, Do not forget to check the box confirming your awareness of the SHPE code of Ethics<br />
            8. Select your payment method and fill out your information<br />
            9. Hit the Submission Application button at the bottom<br />
            10. Welcome to a network of high-caliber students and professionals, or simply: SHPE!
            <br /><br />
            <a href="https://www.shpeconnect.org/eweb/DynamicPage.aspx?WebCode=LoginRequired&expires=yes&Site=shpe" className="hyperLink" target="_blank" rel="noopener noreferrer">SHPE Membership</a><br />
            <a href="https://ucmerced.presence.io/" className="hyperLink" target="_blank" rel="noopener noreferrer">CatLIFE Membership</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Join;
