import React from 'react';
import './leftbar.css';
import {
  Bookmark, Group, HelpOutline, PlayCircleFilledOutlined,
  RssFeed, School, WorkOutline, Event
} from '@mui/icons-material';
import { Users } from '../../dummyData';
import CloseFriends from '../closeFriends/CloseFriends';


export default function Leftbar() {
  return (
    <div className='leftbarContainer'>
      <div className="leftBarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon' />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon' />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon' />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon' />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon' />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon' />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon' />
            <span className="sidebarListItemText">Courses</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className='sidebarIcon' />
            <span className="sidebarListItemText">Videos</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
            {Users.map(u => (
              <CloseFriends key={u.id} user={u}/>
            ))}
      </ul>

    </div>
    </div >
  )
}
