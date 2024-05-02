import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Styles/Professionalism.css";
// import logo from "../../../public/Images/Pillars/Academics/shpelogopiece_orig.jpg"

function Professionalism() {

  return(
    <div>
      <NavBar />
      <div className="Professionalism-Body">
        <h1 style={{textAlign: 'center'}}>Professionalism</h1>
      </div>
      <div className="mainContainer5">
        <div className="container5">
          <div className="paragraph5">
            <h2>Bomba Blast</h2>
            <p>In addition to building ourselves professionally as individuals, we extend resources past our campus. Traditionally Dia de Ciencas is a STEM- related family-friendly event in which we host activities to engage the community and spread the awareness of the lack of minority population in STEM fields. 
Collaborations with other organizations on campus who align with our goals are also welcomed.</p>
          </div>

          <img className="professionalismImages" src="/Images/Pillars/Professionalism/bombablastfresno_orig.jpg" alt="Group of SHPE Members at Bomba Blast" />
          <div className="textUnderImage">Bomba Blast @ Fresno State University 2020</div>
          
          <hr className="horizontalLine5"></hr>

          <div className="paragraph5">
            <h2>RLDC</h2>
            <p>RLDC is the Regional Leadership Development Conferences in which  undergraduates, graduates, and professionals are offered leadership training</p>
          </div>
          
          <img className="professionalismImages" src="/Images/Pillars/Professionalism/rldcfresno_orig.jpg" alt="Group of SHPE Members at Bomba Blast" />
          <div className="textUnderImage">RLDC 2018 @Fresno State University</div>

        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Professionalism;