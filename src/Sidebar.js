import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  const recentItem = (topic) => {
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>;
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://marketplace.canva.com/EAFqqEifB7A/1/0/1600w/canva-purple-abstract-wave-linkedin-banner-JZMOuwP990Q.jpg"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Kevin DeBruyne</h2>
        <h4>kdb17@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
