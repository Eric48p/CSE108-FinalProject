import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar"
import "../Styles/NewForum.css"

import { useState } from "react";

function NewForum() {
  const navigate = useNavigate()
  const [forumTitle, setForumTitle] = useState(""); // State to store forum title
  const [forumContent, setForumContent] = useState(""); // State to store forum content

  const handleTitleChange = (event) => {
    setForumTitle(event.target.value); // Update forum title state as user types
  };

  const handleContentChange = (event) => {
    setForumContent(event.target.value); // Update forum content state as user types
  };

  const getCurrentTime = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Get month with leading zero
    const day = String(now.getDate()).padStart(2, "0"); // Get day with leading zero
    const hours = String(now.getHours()).padStart(2, "0"); // Get hours with leading zero
    const minutes = String(now.getMinutes()).padStart(2, "0"); // Get minutes with leading zero
    return `${month}/${day} - ${hours}:${minutes}`;
  };

  const handlePost = async () => {
    try {
      const storedUser = sessionStorage.getItem("user"); // Retrieve user data from sessionStorage
      if (storedUser) {
        const user = JSON.parse(storedUser);
        const response = await fetch("http://localhost:5000/createForum", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `${user.firstName} ${user.lastName}`, // Concatenate first name and last name
            time: getCurrentTime(), // Get current formatted time
            title: forumTitle,
            content: forumContent,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data.message); // Forum created successfully
          // Optionally, you can redirect or perform any other action here after successful creation
          navigate("/Forums")
        } else {
          console.error(data.error); // Display error message if forum creation fails
        }
      } else {
        console.error("User data not found in session storage");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return(
    <>
      <NavBar />
      <div className="new-forum-body">
        <div className="new-forum-form-body">
          <div className="new-forum-form">
            <p>New Forum Post</p>
            <input type="text" placeholder="Forum Title" value={forumTitle} onChange={handleTitleChange}></input>
            <textarea placeholder="Forum Content" value={forumContent} onChange={handleContentChange}></textarea>
            <input type="submit" value="Post" onClick={handlePost}></input>
          </div>
        </div>
        <div className="new-forum-preview-body">
          <div className="new-forum-preview-post">
            <div className="forum-post-preview-toprow">
              <p>Anonymous</p>
              <p>April 30, 2024</p>
            </div>
            <div className="forum-post-preview-middlerow1">
              <p>{forumTitle}</p>
            </div>
            <div className="forum-post-preview-middlerow2">
              <p>{forumContent}</p>
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