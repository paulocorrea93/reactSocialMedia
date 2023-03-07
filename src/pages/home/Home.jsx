import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/center/Feed'
import './home.css'

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
      <Leftbar />
      <Feed />
      <Rightbar />
      </div>
    </div>
  )
}
