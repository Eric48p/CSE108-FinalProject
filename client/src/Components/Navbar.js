import 'rsuite/Navbar/styles/index.css';
import 'rsuite/Nav/styles/index.css';
import "../Styles/Navbar.css"
import { Navbar , Nav } from 'rsuite';



export default function NavBar(){


  return(
    <Navbar className="custom-Navbar">
      <Navbar.Brand href="/" className='custom-Navbar-Logo'>
        <img src="\Images\shpe-logo-horiz-uc-merced-dkbg.png"></img>
      </Navbar.Brand>
      <Nav className='custom-Navbar-Links'>
        <Nav.Item href='/'>Casa</Nav.Item> 
        <Nav.Menu title="Affairs">
          <Nav.Item href='/ExecutiveBoard'>Executive Board</Nav.Item>
          <Nav.Item href='/WeeklyAnnouncements'>Weekly Announcements</Nav.Item>
          <Nav.Item href='/Calendario'>Calendario</Nav.Item>
        </Nav.Menu>
        <Nav.Menu title="Pillars">
          <Nav.Item>Academics</Nav.Item>
          <Nav.Menu title="Familia">
            <Nav.Item>Manitos Mentorship Program</Nav.Item>
          </Nav.Menu>
          <Nav.Item>Outreach</Nav.Item>
          <Nav.Item>Professionalism</Nav.Item>
          <Nav.Menu title="Network">
            <Nav.Item>SHPE National Convention</Nav.Item>
            <Nav.Item>SHPE-tinas</Nav.Item>
          </Nav.Menu>
        </Nav.Menu>
        <Nav.Item href='/Join'>Join</Nav.Item>
        <Nav.Item href='/Alumni'>Alumni</Nav.Item>
        <Nav.Item>Forums</Nav.Item>
      </Nav>
      <Nav pullRight className='custom-Navbar-Login'>
        <Nav.Item>Login / Sign up</Nav.Item>
      </Nav>
    </Navbar>
  )
}