import 'rsuite/Navbar/styles/index.css';
import 'rsuite/Nav/styles/index.css';
import "../Styles/Navbar.css"
import { Navbar , Nav } from 'rsuite';
import { useNavigate } from 'react-router-dom';



export default function NavBar(){

  const navigate = useNavigate()


  return(
    <Navbar className="custom-Navbar">
      <Navbar.Brand href="/" className='custom-Navbar-Logo'>
        <img src="\Images\shpe-logo-horiz-uc-merced-dkbg.png"></img>
      </Navbar.Brand>
      <Nav className='custom-Navbar-Links'>
        <Nav.Item href='/'>Casa</Nav.Item> 
        <Nav.Menu title="Affairs">
          <Nav.Item onClick={() => navigate('/Affairs')}>Affairs</Nav.Item>
          <Nav.Item onClick={() => navigate('/ExecutiveBoard')}>Executive Board</Nav.Item>
          <Nav.Item onClick={() => navigate('/WeeklyAnnouncements')}>Weekly Announcements</Nav.Item>
          <Nav.Item onClick={() => navigate('/Calendario')}>Calendario</Nav.Item>
        </Nav.Menu>
        <Nav.Menu title="Pillars">
          <Nav.Item onClick={() => navigate('/Academics')}>Academics</Nav.Item>
          <Nav.Menu title="Familia">
            <Nav.Item onClick={() => navigate('/Familia')}>Familia</Nav.Item>
            <Nav.Item onClick={() => navigate('/ManitosMentorshipProgram')}>Manitos Mentorship Program</Nav.Item>
          </Nav.Menu>
          <Nav.Item onClick={() => navigate('/Outreach')}>Outreach</Nav.Item>
          <Nav.Item onClick={() => navigate('/Professionalism')}>Professionalism</Nav.Item>
          <Nav.Menu title="Network">
            <Nav.Item onClick={() => navigate('/Network')}>Network</Nav.Item>
            <Nav.Item onClick={() => navigate('/SHPENationalConvention')}>SHPE National Convention</Nav.Item>
            <Nav.Item onClick={() => navigate('/SHPE-tinas')}>SHPE-tinas</Nav.Item>
          </Nav.Menu>
        </Nav.Menu>
        <Nav.Item href='/Join'>Join</Nav.Item>
        <Nav.Item href='/Alumni'>Alumni</Nav.Item>
        <Nav.Item href='/Forums'>Forums</Nav.Item>
      </Nav>
      <Nav pullRight className='custom-Navbar-Login'>
        <Nav.Item href='/Login'>Login / Sign up</Nav.Item>
      </Nav>
    </Navbar>
  )
}