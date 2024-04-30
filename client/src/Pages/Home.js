import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar"
import "../Styles/Home.css"

import { Carousel } from 'rsuite';
import 'rsuite/Carousel/styles/index.css';

function Home() {


  return(
    <>
      <NavBar />
      <div className="home-body">
        {/* <Carousel autoplay className="custom-slider" placement='right' shape='bar'>
          <img src="/Images/Main-Page/Home-1.JPG" />
          <img src="/Images/Main-Page/Home-2.JPG" />
          <img src="/Images/Main-Page/Home-3.JPG" />
          <img src="/Images/Main-Page/Home-4.JPG" />
        </Carousel> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;