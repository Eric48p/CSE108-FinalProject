import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import ForumPost from "../Components/ForumPost";
import "../Styles/Forums.css";
import { useNavigate } from "react-router-dom";

function Forums() {
  const navigate = useNavigate();
  const [forums, setForums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchForums() {
      try {
        const response = await fetch("http://localhost:5000/getForums"); // Replace with your backend URL
        const data = await response.json();
        if (response.ok) {
          setForums(data.forums);
        } else {
          console.error("Error fetching forums:", data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchForums();
  }, []);


  const filteredForums = forums.filter((forum) =>
    forum.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="forums-body">
        <div className="forums-title">
          <p>SHPE</p>
          <p>Forums</p>
        </div>
        <div className="forums-posts-body">
          <div className="forums-filters">
            <div className="forums-searchbar">
              <svg
                className="icon"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                type="search"
                className="forums-search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button onClick={() => navigate("/NewForum")}>New Post</button>
          </div>
          <div className="forums-posts">
            <ForumPost forums={filteredForums} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Forums;
