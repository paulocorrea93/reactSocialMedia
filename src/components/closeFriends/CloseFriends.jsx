import React from 'react'
import './closeFriends.css'

export default function CloseFriends({user}) {
  return (
    <div>
       <li className="sidebarFriendListItem">
          <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">{user.username}</span>
        </li>
    </div>
  )
}
