import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../Components/Footer"
import NavBar from "../Components/Navbar"
import "../Styles/Forum.css"
import Comment from "../Components/Comment"

function Forum() {
  const { id } = useParams() // Get the forum ID from route parameters
  const [forumData, setForumData] = useState(null)
  const [showReplyPopup, setShowReplyPopup] = useState(false)
  const [replyText, setReplyText] = useState("")

  const getCurrentTime = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Get month with leading zero
    const day = String(now.getDate()).padStart(2, "0"); // Get day with leading zero
    const hours = String(now.getHours()).padStart(2, "0"); // Get hours with leading zero
    const minutes = String(now.getMinutes()).padStart(2, "0"); // Get minutes with leading zero
    return `${month}/${day} - ${hours}:${minutes}`;
  };

  useEffect(() => {
    async function fetchForumData() {
      try {
        const response = await fetch(`http://localhost:5000/getForum?id=${id}`) // Include forum ID in the URL
        const data = await response.json()
        if (response.ok) {
          setForumData(data.forum) // Assuming your backend returns the forum data as an object with a key 'forum'
          // console.log(data.forum);
        } else {
          console.error("Error fetching forum data:", data.error)
        }
      } catch (error) {
        console.error("Error:", error)
      }
    }

    fetchForumData()
  }, [id]) // Include 'id' in the dependency array to fetch data when ID changes

  if (!forumData) {
    return <div>Loading...</div> // Add loading state until forum data is fetched
  }

  const handleReplyClick = () => {
    setShowReplyPopup(true);
  };

  const handlePostReply = async () => {
    try {
      const response = await fetch('http://localhost:5000/replyToForum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: forumData.id, // Assuming forumData has an id property
          name: forumData.creator, // Assuming forumData has a creator property
          time: getCurrentTime(), // Current timestamp
          comment: replyText,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Comment created successfully:', data.message);
        // Optionally, you can update the UI or take other actions upon successful comment creation
      } else {
        console.error('Error creating comment:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Reset reply text and close popup
      setReplyText('');
      setShowReplyPopup(false);
    }
  };

  // Function to check if the user's role is "General Member"
  const isGeneralMember = () => {
    // Retrieve user data from session storage or wherever it's stored
    const userData = JSON.parse(sessionStorage.getItem("user")) // Assuming user data is stored in session storage

    // Check if userData exists and if it has a role property
    if (userData && userData.role) {
      // console.log(userData.role)
      return userData.role === "General Member"
    } else {
      // Handle the case where user data or role is missing
      console.error("User data or role is missing")
      return false // Or return a default value based on your application logic
    }
  }

  return (
    <>
      <NavBar />
      <div className="individual-forum-body">
        <div className="individual-forum-post">
          <div className="individual-forum-post-toprow">
            <p>{isGeneralMember() ? "Anonymous" : forumData.creator}</p>{" "}
            {/* Assuming forumData has creator and timeCreated properties */}
            <p>{forumData.timeCreated}</p>
          </div>
          <div className="individual-forum-post-middlerow-title">
            <p>{forumData.title}</p>
          </div>
          <div className="individual-forum-post-middlerow-content">
            <p>{forumData.content}</p>
          </div>
          <div className="individual-forum-post-bottomrow">
            <span
              className="individual-forum-post-reply"
              onClick={handleReplyClick}
            >
              <p>Reply</p>
            </span>
            <span className="individual-forum-post-likes">
              <p>{forumData.likes}</p>
              <img src="/Images/Icons/like.png" alt="like" />
              <p>{forumData.dislikes}</p>
              <img src="/Images/Icons/dislike.png" alt="dislike" />
            </span>
          </div>
        </div>
        <Comment />
      </div>
      <Footer />
      {/* Popup for replying */}
      {showReplyPopup && (
        <div className="reply-popup">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply..."
          ></textarea>
          <button onClick={handlePostReply}>Post</button>
        </div>
      )}
    </>
  )
}

export default Forum
