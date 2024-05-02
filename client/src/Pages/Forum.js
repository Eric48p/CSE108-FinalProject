import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar"
import "../Styles/Forum.css"
import { useNavigate } from "react-router-dom";
import Comment from "../Components/Comment";

function Forum() {

  const navigate = useNavigate()

  return(
    <>
      <NavBar />
      <div className="individual-forum-body">
        <div className="individual-forum-post">
          <div className="individual-forum-post-toprow">
            <p>Anonymous</p>
            <p>April 30, 2024</p>
          </div>
          <div className="individual-forum-post-middlerow-title">
            <p>What Color is the Sky?</p>
          </div>
          <div className="individual-forum-post-middlerow-content">
            <p>The sky appears blue because of Rayleigh scattering, where shorter wavelengths of sunlight, like blue and violet, are scattered more than longer wavelengths, making the sky appear blue during the day. This scattering effect is particularly noticeable when sunlight travels through the Earth's atmosphere and interacts with gas molecules and particles. As a result, the blue light is dispersed in all directions, giving the sky its iconic blue hue.</p>
          </div>
          <div className="individual-forum-post-bottomrow">
            <span className="individual-forum-post-reply">
              <p>Reply</p>
            </span>
            <span className="individual-forum-post-likes">
              <p>0</p>
              <img src="/Images/Icons/like.png"></img>
              <p>0</p>
              <img src="/Images/Icons/dislike.png"></img>
            </span>
          </div>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <Footer />
    </>
  );
}

export default Forum;