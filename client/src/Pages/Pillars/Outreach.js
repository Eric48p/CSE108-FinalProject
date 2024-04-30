import NavBar from "../../Components/Navbar";
import "../../Styles/Outreach.css";
// import logo from "../../../public/Images/Pillars/Academics/shpelogopiece_orig.jpg"

function Outreach() {

  return(
    <div>
      <NavBar />
      <div className="Outreach-Body">
        <h1 style={{textAlign: 'center'}}>Outreach</h1>
      </div>
      <div className="mainContainer4">
        <div className="container4">
          <div className="paragraph4">
            <p>In addition to building ourselves professionally as individuals, we extend resources past our campus. Traditionally Dia de Ciencas is a STEM- related family-friendly event in which we host activities to engage the community and spread the awareness of the lack of minority population in STEM fields. 
Collaborations with other organizations on campus who align with our goals are also welcomed.</p>
          </div>

        </div>
      </div>
    </div>
    
  );
}

export default Outreach;