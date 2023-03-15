import React from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/center/Feed";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile ">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="./assets/post/3.jpeg"
                className="profileCoverImg"
                alt=""
              />
              <img
                src="./assets/person/7.jpeg"
                className="profileUserImg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Paulo Correa</h4>
              <span className="profileInfoDesc">Hey, whats up, buddy?</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}
