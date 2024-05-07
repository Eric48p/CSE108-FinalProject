import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Footer from "../Components/Footer"
import NavBar from "../Components/Navbar"
import "../Styles/Forum.css"
import Comment from "../Components/Comment"

function Forum() {
  const { id } = useParams() // Get the forum ID from route parameters
  const [forumData, setForumData] = useState(null)
  const [showReplyPopup, setShowReplyPopup] = useState(false)
  const [replyText, setReplyText] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [editedTitle, setEditedTitle] = useState("")
  const [editedContent, setEditedContent] = useState("")
  const userData = JSON.parse(sessionStorage.getItem("user")) // Assuming user data is stored in session storage
  const navigate = useNavigate()

  const getCurrentTime = () => {
    const now = new Date()
    const month = String(now.getMonth() + 1).padStart(2, "0") // Get month with leading zero
    const day = String(now.getDate()).padStart(2, "0") // Get day with leading zero
    const hours = String(now.getHours()).padStart(2, "0") // Get hours with leading zero
    const minutes = String(now.getMinutes()).padStart(2, "0") // Get minutes with leading zero
    return `${month}/${day} - ${hours}:${minutes}`
  }

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
    setShowReplyPopup(true)
  }

  const handlePostReply = async () => {
    try {
      const response = await fetch("http://localhost:5000/replyToForum", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: forumData.id, // Assuming forumData has an id property
          name: userData.firstName + " " + userData.lastName, // Assuming forumData has a creator property

          time: getCurrentTime(), // Current timestamp
          comment: replyText,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("Comment created successfully:", data.message)
        // Optionally, you can update the UI or take other actions upon successful comment creation
      } else {
        console.error("Error creating comment:", data.error)
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      // Reset reply text and close popup
      setReplyText("")
      setShowReplyPopup(false)
      window.location.reload()
    }
  }

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

  const handleDeleteClick = async () => {
    // const userData = JSON.parse(sessionStorage.getItem("user")); // Assuming user data is stored in session storage
    try {
      const response = await fetch("http://localhost:5000/deleteForum", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          forumId: forumData.id,
        }),
      })

      const data = await response.json()
      console.log(forumData.id, userData.id)

      if (response.ok) {
        console.log("Forum delelted successfully:", data.message)
        navigate("/Forums")
      } else {
        console.error("Error updating forum interaction:", data.error)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const handleLike = async (interaction) => {
    const userData = JSON.parse(sessionStorage.getItem("user")) // Assuming user data is stored in session storage
    try {
      if (!userData.id) {
        console.error("User ID not found")
        return
      }

      const response = await fetch("http://localhost:5000/interactWForum", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          forumId: forumData.id,
          userId: userData.id, // Use the user ID from state
          interaction: interaction,
        }),
      })

      const data = await response.json()
      console.log(forumData.id, userData.id, interaction)

      if (response.ok) {
        console.log("Forum interaction updated successfully:", data.message)
        window.location.reload()
      } else {
        console.error("Error updating forum interaction:", data.error)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const handleEditClick = () => {
    setEditMode(true)
    setEditedTitle(forumData.title)
    setEditedContent(forumData.content)
  }

  const handleCancelEdit = () => {
    setEditMode(false)
    setEditedTitle("")
    setEditedContent("")
  }

  const handleSaveEdit = async () => {
    try {
      const response = await fetch("http://localhost:5000/editForum", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: forumData.id,
          title: editedTitle,
          content: editedContent,
          time: getCurrentTime(),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("Forum edited successfully:", data.message)
        setForumData((prevData) => ({
          ...prevData,
          title: editedTitle,
          content: editedContent,
        }))
        setEditMode(false)
      } else {
        console.error("Error editing forum:", data.error)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <>
      <NavBar />
      <div className="individual-forum-body">
        <div className="individual-forum-post">
          <div className="individual-forum-post-toprow">
            <p>{isGeneralMember() ? "Anonymous" : forumData.creator}</p>
            <p>{forumData.timeCreated}</p>
          </div>
          <div className="individual-forum-post-middlerow-title">
            {editMode ? (
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            ) : (
              <p>{forumData.title}</p>
            )}
          </div>
          <div className="individual-forum-post-middlerow-content">
            {editMode ? (
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              ></textarea>
            ) : (
              <p>{forumData.content}</p>
            )}
          </div>
          <div className="individual-forum-post-bottomrow">
            <span
              className="individual-forum-post-reply"
              onClick={handleReplyClick}
            >
              <p>Reply</p>
            </span>
            {forumData.creator ===
            `${userData.firstName} ${userData.lastName}` ? (
              editMode ? (
                <div>
                  <button onClick={handleSaveEdit}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </div>
              ) : (
                <span
                  className="individual-forum-post-edit"
                  onClick={handleEditClick}
                >
                  <p>Edit</p>
                </span>
              )
            ) : null}
            {forumData.creator ===
            `${userData.firstName} ${userData.lastName}` ? (
              <span
                className="individual-forum-post-edit"
                onClick={handleDeleteClick}
              >
                <p>Delete</p>
              </span>
            ) : null}
            <span className="individual-forum-post-likes">
              <p>{forumData.likes}</p>
              <img
                src="/Images/Icons/like.png"
                alt="like"
                onClick={() => handleLike("like")}
              />
              <p>{forumData.dislikes}</p>
              <img
                src="/Images/Icons/dislike.png"
                alt="dislike"
                onClick={() => handleLike("dislike")}
              />
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
