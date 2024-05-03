import NavBar from "../../Components/Navbar";
import "../../Styles/Network.css";
import Footer from "../../Components/Footer";

function Network() {


  return(
    <div>
      <NavBar />
      <div className="Network-Body">
        <h1 style={{textAlign: 'center'}}>Network</h1>
      </div>
      <div className="Network-Test">
        <div className="Network-container">
          <div className="Network-paragraph">
          Networking opportunities can be found at any of our events or Official SHPE Events. Our goal is to be inclusive and to provide resources to deserving underrepresented talent. Check out our SHPE-tinas and SHPE Nationals events and connect via LinkedIn with our board members!. 
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Network;