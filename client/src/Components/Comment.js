import "../Styles/Comment.css"

export default function Comment(){

  return(
    <div className="forum-comment">
      <div className="forum-comment-toprow">
        <p>Anonymous</p>
        <p>April 30, 2024</p>
      </div>
      <div className="forum-comment-middlerow">
        <p>This is super interesting!dhas kjdhaskjd haskjdhas kjdhksj dhaskjdhka jshdkajshd kjashd kjashdkjashdkjhadkjashdkashkd jsahdk jhsakdj hakd</p>
      </div>
      <div className="forum-comment-bottomrow">
        <p>0</p>
        <img src="/Images/Icons/like.png"></img>
        <p>0</p>
        <img src="/Images/Icons/dislike.png"></img>
      </div>
    </div>
  )
}