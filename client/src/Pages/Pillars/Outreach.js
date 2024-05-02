import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
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

          <div id="slideshow">
            <div className="slide-wrapper">
    
              {/* <!-- Define each of the slides and write the content --> */}
  
              
              <div className="slide">
                <img className="slideImages cover" src="/Images/Pillars/Outreach/dia-de-ciencas_orig.png" alt="Group of highschool students" />
              </div>
              <div className="slide">
                <img className="slideImages cover" src="/Images/Pillars/Outreach/halloweendrivethru_orig.jpg" alt="Halloween Trunk or Treat" />
              </div>
              <div className="slide">
                <img className="slideImages cover" src="/Images/Pillars/Outreach/iuxhau-collaboration_orig.jpg" alt="Group of SHPE with iuxhau" />
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Outreach;