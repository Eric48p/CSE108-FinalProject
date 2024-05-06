import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Forums.css";

export default function ForumPost({ forums }) {
  // Function to check if the user's role is "General Member"
  const isGeneralMember = () => {
    // Retrieve user data from session storage or wherever it's stored
    const userData = JSON.parse(sessionStorage.getItem("user")); // Assuming user data is stored in session storage

    // Check if userData exists and if it has a role property
    if (userData && userData.role) {
      return userData.role === "General Member";
    } else {
      // Handle the case where user data or role is missing
      console.error("User data or role is missing");
      return false; // Or return a default value based on your application logic
    }
  };

  return (
    <>
      {forums.map((forum) => (
        <Link
          to={`/Forum/${forum.id}`}
          key={forum.id}
          className="forum-post-route"
        >
          <div className="forum-post">
            <div className="forum-post-toprow">
              <p>{isGeneralMember() ? "Anonymous" : forum.creator}</p>
              <p>{forum.timeCreated}</p>
            </div>
            <div className="forum-post-middlerow">
              <p>{forum.title}</p>
            </div>
            <div className="forum-post-bottomrow">
              <p>{forum.likes}</p>
              <img src="/Images/Icons/like.png" alt="like"></img>
              <p>{forum.dislikes}</p>
              <img src="/Images/Icons/dislike.png" alt="dislike"></img>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
