import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Styles/Calendario.css"

import Iframe from 'react-iframe';

function Calendario() {


  return(
    <div>
      <NavBar />
      <div className="Calendario-Body">
        <h1 style={{ textAlign: "center" }}>CALENDARIO</h1>
      </div>
      <div className="Calendario-Test">
        <div className="Calendario-container">
        <Iframe
        url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;ctz=America%2FLos_Angeles&amp;bgcolor=%237986CB&amp;src=Mzc5Mzg0NmY4OGUzYTQyZGNjZDYyNzEwM2I1YWVjYzJkZGY4NDUxYjkxNDI3Njg5YmQwNDgyZjQyNmM4OTg4NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=OWhoazFyY2hycm9ocmpzZjhiZTdpNGFwZmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E4C441&amp;color=%23AD1457"
        width="920"
        height="600"
        frameborder="0"
        scrolling="no"
      />
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Calendario;