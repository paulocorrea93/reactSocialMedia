import React from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';


export default function Rightbar(profile) {
  const HomeRightbar = () => {
    return (
      <div>
        <div className="birthdayContainer">
          <img src="./assets/gift.png" alt="" className='birthdayImg' />
          <span className="birthdayText"><b>João</b> and <b>4 others friends</b> have a birthday today.</span>
        </div>

        <img src="./assets/ad.png" alt="" className="rightbarAd" />

        <h4 className="righbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    )
  }

  const ProfileRightBar = () => {
    return (
      <div>
        <h4 className='rightbarTitle'>User Information Title</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Manaus</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Manaus</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Singer</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="./assets/person/1.jpeg" alt="" className="righbarFollowingImg" />
            <span className="rightbarFollowingName">Safak Kocaoglu</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/2.jpeg" alt="" className="righbarFollowingImg" />
            <span className="rightbarFollowingName">Janell Shrum</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/3.jpeg" alt="" className="righbarFollowingImg" />
            <span className="rightbarFollowingName">Alex Durden</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/4.jpeg" alt="" className="righbarFollowingImg" />
            <span className="rightbarFollowingName">Dora Hawks</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/5.jpeg" alt="" className="righbarFollowingImg" />
            <span className="rightbarFollowingName">Thomas Holden</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/6.jpeg" alt="" className="righbarFollowingImg" />
            <span className="rightbarFollowingName">Shirley Bea</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='rightbarContainer'>
      <div className="rightbarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  )
}
