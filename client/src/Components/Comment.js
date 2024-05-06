import "../Styles/Comment.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Comment() {
  const { id } = useParams(); // Get the forum ID from route parameters
  const [comments, setComments] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedComment, setEditedComment] = useState("");
  const [commentIdToEdit, setCommentIdToEdit] = useState("");
  const userData = JSON.parse(sessionStorage.getItem("user")); // Assuming user data is stored in session storage

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(`http://localhost:5000/getComments?id=${id}`); // Include forum ID in the URL
        if (response.ok) {
          const data = await response.json();
          setComments(data); // Assuming your backend returns the comments array directly
          // console.log(data);
        } else if (response.status === 404) {
          console.error("Comments not found for this forum");
        } else {
          console.error("Error fetching comments");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchComments();
  }, [id]); // Include 'id' in the dependency array to fetch data when ID changes

  const handleCommentLike = async (commentId, interaction) => {
    // Your existing code for handling comment likes
  };

  const handleEditClick = (commentId, comment) => {
    setEditMode(true);
    setEditedComment(comment);
    setCommentIdToEdit(commentId);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch("http://localhost:5000/editComment", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: commentIdToEdit,
          comment: editedComment,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Comment edited successfully:", data.message);
        setEditMode(false);
        window.location.reload();
      } else {
        console.error("Error editing comment:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedComment("");
    setCommentIdToEdit("");
  };

  return (
    <>
      {comments.map((comment) => (
        <div className="forum-comment" key={comment.id}>
          <div className="forum-comment-toprow">
            <p>{comment.commentOwner}</p>
            <p>{comment.timeCreated}</p>
          </div>
          <div className="forum-comment-middlerow">
            {editMode && commentIdToEdit === comment.id ? (
              <textarea
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
              ></textarea>
            ) : (
              <p>{comment.comment}</p>
            )}
          </div>
          <div className="forum-comment-bottomrow">
            {comment.commentOwner === `${userData.firstName} ${userData.lastName}` && (
              <>
                {editMode && commentIdToEdit === comment.id ? (
                  <span className="forum-comment-edit">
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </span>
                ) : (
                  <span className="forum-comment-edit" onClick={() => handleEditClick(comment.id, comment.comment)}>
                    <p style={{ color: "#f26534" }}>Edit</p>
                  </span>
                )}
              </>
            )}
            <p>{comment.likes}</p>
            <img
              src="/Images/Icons/like.png"
              onClick={() => handleCommentLike(comment.id, "like")}
              alt="like"
            />
            <p>{comment.dislikes}</p>
            <img
              src="/Images/Icons/dislike.png"
              onClick={() => handleCommentLike(comment.id, "dislike")}
              alt="dislike"
            />
          </div>
        </div>
      ))}
    </>
  );
}
