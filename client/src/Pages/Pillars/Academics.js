import NavBar from "../../Components/Navbar";
import "../../Styles/Academics.css";
// import logo from "../../../public/Images/Pillars/Academics/shpelogopiece_orig.jpg"

function Academics() {

  return(
    <div>
      <NavBar />
      <div className="Academics-Body">
        <h1 style={{textAlign: 'center'}}>Academics</h1>
      </div>
      <div className="Test">
        <div className="container">
          <div className="paragraph">
            Our role in Academics is to provide gratuitous resources to build a strong team of Engineering Student Cohort at SHPE UC Merced; as college students, school comes first. We all have been in the position of struggling academically but we don't have to struggle alone. Whether you would like to be a tutor, be a tutee, or just looking for a study group, please contact our Academic Chair, <strong><a className="hyperLink" href="/ExecutiveBoard" target="_blank">Carlos Montano</a></strong>. 
            <br></br>
            <br></br>
            We have a SHPE UC Merced Discord Channel to accommodate most of these uses. ​ Our job is to also promote(free) on-campus resources; listed below are hyperlinks to the different types of resources.
          </div>
          
          <img className="shpeLogo" src="/Images/Pillars/Academics/shpelogopiece_orig.png" alt="shpeLogo" />
        </div>
      </div>
    </div>
    
  );
}

export default Academics;