import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Styles/Academics.css";
// import logo from "../../../public/Images/Pillars/Academics/shpelogopiece_orig.jpg"

function Academics() {

  return(
    <div>
      <NavBar />
      <div className="Academics-Body">
        <h1 style={{textAlign: 'center'}}>Academics</h1>
      </div>
      <div className="mainContainer">
        <div className="container">
          <div className="paragraph">
            Our role in Academics is to provide gratuitous resources to build a strong team of Engineering Student Cohort at SHPE UC Merced; as college students, school comes first. We all have been in the position of struggling academically but we don't have to struggle alone. Whether you would like to be a tutor, be a tutee, or just looking for a study group, please contact our Academic Chair, <strong><a className="hyperLink" href="/ExecutiveBoard" target="_blank">Carlos Montano</a></strong>. 
            <br></br>
            <br></br>
            We have a SHPE UC Merced Discord Channel to accommodate most of these uses. ​ Our job is to also promote(free) on-campus resources; listed below are hyperlinks to the different types of resources.
          </div>
          
          <div className="discordTextBox" >
              <a href="https://discord.gg/X7bhZPuv9h">
                <img className="shpeLogo" src="/Images/Pillars/Academics/shpelogopiece_orig.png" alt="SHPE Logo" />
              </a>
              <div className="box" >
                <h2 className="discordServerLetters">Click on the SHPE Logo to join our Discord Server!</h2>
              </div>
          </div>

          <hr className="horizontalLine"></hr>
          <h2 className="smallTitles">On-Campus Resources</h2>
          
          <div className="classResourcesDiv">
          <a className="campusResources" href="https://success.ucmerced.edu/tutoring#math">The Math Center</a>
          </div>
            
          <div className="classResourcesDiv">
          <a className="campusResources" href="https://success.ucmerced.edu/tutoring#chem" >The Chem Center</a>
          </div>
            
          <div className="classResourcesDiv">
            <a className="campusResources" href="https://success.ucmerced.edu/tutoring#physics">Physics Help Center</a>
          </div>
          
          <div className="classResourcesDiv">
            <a className="campusResources" href="https://success.ucmerced.edu/tutoring#stem">Stem Resource Center</a>
          </div>
          
          <div className="classResourcesDiv">
            <a className="campusResources" href="https://success.ucmerced.edu/tutoring#pals">Peer-Assisted Learning Support(PALS)</a>
          </div>
          <div className="classResourcesDiv">
            <a className="campusResources lastResource" href="https://success.ucmerced.edu/tutoring#writing">University Writing Center</a>
          </div>
            
          <h2 className="smallTitles">Online (Programming)Resources</h2>

        <div className="onlineResources">
          <ul className="list">
            <li>
              <a href="http://codeacademy.com/">Codeacademy:</a>
              <ul>
                <li>Learn coding the easy way! Learn different languages with tutorials step-by-step</li>
              </ul>
            </li>
            <li>
              <a href="https://www.bento.io/tracks?">Bento:</a>
              <ul>
                <li>This is an alternative path from Codecademy that goes into depth of programming for website development</li>
              </ul>
            </li>
            <li>
              <a href="https://www.linkedin.com/learning/">LinkedIn Learning:</a>
              <ul>
                <li>Aka Lyndia Learning, stream(free) videos on everything from Microsoft Excel to Java to Professionalism</li>
              </ul>
            </li>
            <li>
              <a href="https://www.hackerrank.com/">HackerRank</a>
              <ul>
                <li>Do you want to test your programming skills? HackerRank is a great resource to challenge yourself and even improve your programming skills before a technical interview​​</li>
              </ul>
            </li>
          </ul>
        </div>

          <hr className="horizontalLine end"></hr>
          
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Academics;