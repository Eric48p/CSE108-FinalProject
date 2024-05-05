import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Styles/Familia.css";
// import logo from "../../../public/Images/Pillars/Academics/shpelogopiece_orig.jpg"

function Familia() {

  return(
    <div>
      <NavBar />
      <div className="Familia-Body">
        <h1 style={{textAlign: 'center'}}>Familia</h1>
      </div>
      <div className="mainContainer2">
        <div className="container2">
          <div className="paragraph2">
            <h2>"Lift as you climb"</h2>
            <p>The familia pillar of SHPE UC Merced has always been in the DNA of the organization since its creation of Ingenieros Unidos. We stick together as university students transitioning into the workforce or research. As reflection of the University of California, Merced, the majority of members are first or second generation college students of hispanic background breaking barriers in the STEM field. Students come and go but after graduation, alumni are more than welcome to visit and give guidance to the current members; this pillar is the beating heart of SHPE UC Merced.</p>
            {/* The familia pillar of SHPE UC Merced has always been in the DNA of the organization since its creation of Ingenieros Unidos. We stick together as university students transitioning into the workforce or research. As reflection of the University of California, Merced, the majority of members are first or second generation college students of hispanic background breaking barriers in the STEM field. Students come and go but after graduation, alumni are more than welcome to visit and give guidance to the current members; this pillar is the beating heart of SHPE UC Merced. */}
          </div>

          <hr className="horizontalLine2"></hr>
          <h2 className="smallTitles2">What do we offer?</h2>
          
          <p>General member meetings are a way to announce events as well as meet other members. The Manitos Program offers a mentorship to any who applies. Please check out our familia related programs for more details.</p>
          
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Familia;

