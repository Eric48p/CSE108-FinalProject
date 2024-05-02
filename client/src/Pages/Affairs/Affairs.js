import NavBar from "../../Components/Navbar";
import "../../Styles/Affairs.css";

function Affairs() {
  return (
    <div>
      <NavBar />
      <div className="Affairs-Body">
        <h1 style={{textAlign: 'center'}}>Want to Learn More?</h1>
      </div>
      <div className="Affairs-Test">
        <div className="Affairs-container">
          <div className="Affairs-content">
            <div className="Affairs-paragraph">
              Click on our <a href="https://linktr.ee/UCM_SHPE" className="hyperLink" target="_blank" rel="noopener noreferrer">LinkTree</a> (or scan) to find:
              <ul className="link-list">
                <li>Social Media</li>
                <li>LinkedIn</li>
                <li>Discord</li>
                <li>Google Drive</li>
                <li>Open Executive Positions</li>
                <li>Leadership Opportunities</li>
              </ul>
            </div>
            <div className="qr-code"></div> {/* This div will display the QR code image */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Affairs;
