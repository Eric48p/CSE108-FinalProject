import "../Styles/Forums.css"

export default function ForumPost(){

  return(
    <div className="forum-post">
      <div className="forum-post-toprow">
        <p>Anonymous</p>
        <p>April 30, 2024</p>
      </div>
      <div className="forum-post-middlerow">
        <p>What Color is the Sky?</p>
      </div>
      <div className="forum-post-bottomrow">
        <p>10</p>
        <img src="/Images/Icons/like.png"></img>
        <p>5</p>
        <img src="/Images/Icons/dislike.png"></img>
      </div>
    </div>
  )
}