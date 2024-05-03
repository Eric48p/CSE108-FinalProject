import React from 'react';
import NavBar from "../Components/Navbar";
import "../Styles/Alumni.css";
import Footer from "../Components/Footer";

function submitForm() {
  document.getElementById("contactForm").submit();
}

function Alumni() {
  return (
    <div>
      <NavBar />
      <div className="Alumni-Body">
        <h1 style={{textAlign: 'center'}}>Alumni</h1>
        <div className="Alumni-container">
          <p className="description">Our Alumni have reached top companies such as Northrop Grumman, Boeing, Rockwell Collins, etc. Networking is highly encouraged!</p>
        </div>
        <div className="slideshowContainer">
          <div className="slideshow">
            <div className="slide">
              <img src="https://media.licdn.com/dms/image/D5603AQHtd6CW_hnFVQ/profile-displayphoto-shrink_400_400/0/1684261633777?e=1720051200&v=beta&t=tMZvlAo_xFdNtvdr-Syy4y3zpDkM1wD7kee2HCrmNwg" alt="Alumni 1" />
              <div className="slideText">
                <div><strong>Brandon Ortega</strong></div>
                <div>Analyst at General Mills</div>
              </div>
            </div>
            <div className="slide">
              <img src="https://media.licdn.com/dms/image/C4E03AQGoqupC3Dhaxg/profile-displayphoto-shrink_800_800/0/1572352146529?e=1720051200&v=beta&t=DYjtUUg73SLY739BELH5sV3y24L_Oy1FJ-MN8Mb-8BY" alt="Alumni 2" />
              <div className="slideText">
                <div><strong>Marcelino García</strong></div>
                <div>Manufacturing Engineering Manager at Northrop Grumman</div>
                </div>
            </div>
            <div className="slide">
              <img src="https://media.licdn.com/dms/image/C5603AQEsN4dJnyr40A/profile-displayphoto-shrink_800_800/0/1660326176619?e=1720051200&v=beta&t=D7z86F-W31oPINRN-PdeuAa6U4BmYoEH_-vgCy7vVfo" alt="Alumni 3" />
              <div className="slideText">
                <div><strong>Valeria Cortez</strong></div>
                <div>Software Engineer at L3Harris Technologies</div>
              </div>
            </div>
            <div className="slide">
              <img src="https://media.licdn.com/dms/image/C4E03AQH31BBKdY9D4A/profile-displayphoto-shrink_800_800/0/1646427266332?e=1720051200&v=beta&t=d11grAeGH72u-I-xonbFZzyJo0ypSappvd_l7R9Vbmk" alt="Alumni 4" />
              <div className="slideText">
                <div><strong>Marina Medina</strong></div>
                <div>Mechanical Engineer at Northrop Grumman</div>
              </div>
            </div>
            <div className="slide">
              <img src="https://media.licdn.com/dms/image/D5603AQFcBpxknEmOfg/profile-displayphoto-shrink_400_400/0/1701408583566?e=1720051200&v=beta&t=8Zbkh88uKx4jySv1ewD3Nh1qIRpoFWTG64FU4Gc9XKk" alt="Alumni 4" />
              <div className="slideText">
                <div><strong>Christian Montes</strong></div>
                <div>Systems Engineer at Northrop Grumman</div>
              </div>
            </div>
            <div className="slide">
              <img src="https://media.licdn.com/dms/image/D5603AQGnt-qdB_cuUQ/profile-displayphoto-shrink_400_400/0/1709072257804?e=1720051200&v=beta&t=o--o4dNknP1KGekfcOy9UFCJh7GL3w1X7JZrttNlISA" alt="Alumni 4" />
              <div className="slideText">
                <div><strong>Denise Rosas</strong></div>
                <div>Quality Engineer at Altec</div>
              </div>
            </div>
            <div className="slide">
              <img src="https://media.licdn.com/dms/image/C5603AQEma7zdlQ36Xg/profile-displayphoto-shrink_400_400/0/1617315411291?e=1720051200&v=beta&t=QcJGUxejbndDSHCeRsPAGOsiAGbXsZFQJKRGUfhf7-c" alt="Alumni 4" />
              <div className="slideText">
                <div><strong>Linda Singh</strong></div>
                <div>Environmental Technician at (DBA) TOMA-TEK</div>
              </div>
            </div>
            <div className="slide">
              <img src="https://media.licdn.com/dms/image/D5603AQHrXyeTbq4GGQ/profile-displayphoto-shrink_400_400/0/1708981186045?e=1720051200&v=beta&t=OyLtDVJv_0JO8tljELUSNyNCeBZr82JDUBGt-G49Wrs" alt="Alumni 4" />
              <div className="slideText">
                <div><strong>Christopher Patzan</strong></div>
                <div>Electrical Engineer at Northrop Grumman </div>
              </div>
            </div>
            <div className="slide">
              <img src="https://media.licdn.com/dms/image/D4E03AQFJGfkSLlypDg/profile-displayphoto-shrink_400_400/0/1692132708683?e=1720051200&v=beta&t=hhvroShBo9N-rWHXT-g-Wxy5ulcq_t-h9sBIvN5fSbc" alt="Alumni 4" />
              <div className="slideText">
                <div><strong>Emily Junez</strong></div>
                <div>Advanced Materials Technology Engineer at General Motors</div>
              </div>
            </div>
            <div className="slide">
              <img src="https://media.licdn.com/dms/image/D5603AQEur3-RLmwXVQ/profile-displayphoto-shrink_400_400/0/1690304564982?e=1720051200&v=beta&t=Iq7J_fXicapkxbY3S98BdBxTyeGWInaTAN_MpIydDcU" alt="Alumni 4" />
              <div className="slideText">
                <div><strong>Betsy Avila</strong></div>
                <div>Software Engineer at Accenture</div>
              </div>
            </div>
            {/* Add more slides as needed */}
          </div>
        </div>
        <div className="contactContainer">
          <div className="Alumni-container">
            <h2 className="smallTitles">For any general questions regarding Alumni Networking:</h2>
            <p className="smallText" style={{ color: 'red' }}>* <span style={{ color: 'white' }}>Indicates required field</span></p> {/* Updated line */}
            <form id="contactForm" action="https://formspree.io/f/moqgrlpd" method="POST">
              <label htmlFor="name">Name <span style={{ color: 'red' }}>*</span>:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span>:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message <span style={{ color: 'red' }}>*</span>:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
              <input type="text" name="_gotcha" style={{display: 'none'}} /> {/* Formspree anti-spam field */}
              <button type="button" onClick={submitForm}>Submit</button>
              </form>
              </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Alumni;
