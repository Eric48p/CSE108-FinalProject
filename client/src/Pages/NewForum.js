import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar"
import "../Styles/NewForum.css"

function NewForum() {


  return(
    <>
      <NavBar />
      <div className="new-forum-body">
        <div className="new-forum-form-body">
          <div className="new-forum-form">
            <p>New Forum Post</p>
            <input type="text" placeholder="Forum Title"></input>
            <textarea placeholder="Forum Content"></textarea>
            <input type="submit" value="Post"></input>
          </div>
        </div>
        <div className="new-forum-preview-body">
          <div className="new-forum-preview-post">
            <div className="forum-post-preview-toprow">
              <p>Anonymous</p>
              <p>April 30, 2024</p>
            </div>
            <div className="forum-post-preview-middlerow1">
              <p>What Color is the Sky?</p>
            </div>
            <div className="forum-post-preview-middlerow2">
              <p>The sky appears blue because of Rayleigh scattering, where shorter wavelengths of sunlight, like blue and violet, are scattered more than longer wavelengths, making the sky appear blue during the day. This scattering effect is particularly noticeable when sunlight travels through the Earth's atmosphere and interacts with gas molecules and particles. As a result, the blue light is dispersed in all directions, giving the sky its iconic blue hue.</p>
            </div>
            <div className="forum-post-preview-bottomrow">
              <span className="forum-post-preview-reply">
                <p>Reply</p>
              </span>
              <span className="forum-post-preview-likes">
                <p>0</p>
                <img src="/Images/Icons/like.png"></img>
                <p>0</p>
                <img src="/Images/Icons/dislike.png"></img>
              </span>
            </div>
          
          </div>
          <div className="new-forum-preview-comment">
            <div className="new-forum-preview-comment-toprow">
              <p>Anonymous</p>
              <p>April 30, 2024</p>
            </div>
            <div className="new-forum-preview-comment-middlerow">
              <p>This is super interesting!</p>
            </div>
            <div className="new-forum-preview-comment-bottomrow">
              <p>0</p>
              <img src="/Images/Icons/like.png"></img>
              <p>0</p>
              <img src="/Images/Icons/dislike.png"></img>
            </div>
          </div>
          <div className="new-forum-preview-comment">
            <div className="new-forum-preview-comment-toprow">
              <p>Anonymous</p>
              <p>April 30, 2024</p>
            </div>
            <div className="new-forum-preview-comment-middlerow">
              <p>Wow! This is really cool!</p>
            </div>
            <div className="new-forum-preview-comment-bottomrow">
              <p>0</p>
              <img src="/Images/Icons/like.png"></img>
              <p>0</p>
              <img src="/Images/Icons/dislike.png"></img>
            </div>
          </div>
          <div className="new-forum-preview-comment">
            <div className="new-forum-preview-comment-toprow">
              <p>Anonymous</p>
              <p>April 30, 2024</p>
            </div>
            <div className="new-forum-preview-comment-middlerow">
              <p>I never knew this!</p>
            </div>
            <div className="new-forum-preview-comment-bottomrow">
              <p>0</p>
              <img src="/Images/Icons/like.png"></img>
              <p>0</p>
              <img src="/Images/Icons/dislike.png"></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewForum;