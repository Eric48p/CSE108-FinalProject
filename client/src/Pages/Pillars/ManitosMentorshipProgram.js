import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Styles/ManitosMentorshipProgram.css";
// import logo from "../../../public/Images/Pillars/Academics/shpelogopiece_orig.jpg"

function ManitosMentorshipProgram() {

  return(
    <div>
      <NavBar />
      <div className="mainContainer3">
        <div className="container3">
          <div className="paragraph3">
            <h1>Manitos Mentorship Program</h1>
            <p>The familia pillar of SHPE UC Merced has always been in the DNA of the organization since its creation of Ingenieros Unidos. We stick together as university students transitioning into the workforce or research. As reflection of the University of California, Merced, the majority of members are first or second generation college students of hispanic background breaking barriers in the STEM field. Students come and go but after graduation, alumni are more than welcome to visit and give guidance to the current members; this pillar is the beating heart of SHPE UC Merced.</p>
          </div>

                {/* <!-- Define the slideshow container --> */}
          <div id="slideshow">
            <div className="slide-wrapper">
    
              {/* <!-- Define each of the slides and write the content --> */}
  
              
              <div className="slide">
                <img className="slideImages cover" src="/Images/Pillars/ManitosMentorshipProgram/groupPictureLake.jpg" alt="Group of SHPE Members at the Lake" />
              </div>
              <div className="slide">
                <img className="slideImages cover" src="/Images/Pillars/ManitosMentorshipProgram/lakePicture2.jpg" alt="Two SHPE members at the lake" />
              </div>
              <div className="slide">
                <img className="slideImages cover" src="/Images/Pillars/ManitosMentorshipProgram/lakePicture3.jpg" alt="Two SHPE members at the lake" />
              </div>
              <div className="slide">
                <img className="slideImages cover" src="/Images/Pillars/ManitosMentorshipProgram/lakePicture4.jpg" alt="Two SHPE members at the lake" />
              </div>
              <div className="slide">
                <img className="slideImages cover" src="/Images/Pillars/ManitosMentorshipProgram/lakePicture5.jpg" alt="Two SHPE members at the lake" />
              </div>
              <div className="slide">
                <img className="slideImages cover" src="/Images/Pillars/ManitosMentorshipProgram/lakePicture6.jpeg" alt="Two SHPE members at the lake" />
              </div>
              <div className="slide">
                <img className="slideImages cover" src="/Images/Pillars/ManitosMentorshipProgram/lakePicture7.jpeg" alt="Two SHPE members at the lake" />
              </div>
              
              
              
              
              
              
              
              
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default ManitosMentorshipProgram;