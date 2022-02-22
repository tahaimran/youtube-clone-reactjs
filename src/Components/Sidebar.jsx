import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { Home, Whatshot, History, Subscriptions, VideoLibrary, OndemandVideo, WatchLater, ThumbUpAltOutlined, ExpandMoreOutlined } from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={Home} title='Home' />
      <SidebarRow Icon={Whatshot} title='Trending' />
      <SidebarRow Icon={Subscriptions} title='Subscriptions' />
      <hr />
      <SidebarRow Icon={VideoLibrary} title='Library' />
      <SidebarRow Icon={History} title='History' />
      <SidebarRow Icon={OndemandVideo} title='Your Videos' />
      <SidebarRow Icon={WatchLater} title='Watch Later' />
      <SidebarRow Icon={ThumbUpAltOutlined} title='Liked Videos' />
      <SidebarRow Icon={ExpandMoreOutlined} title='Show More' />
    <hr />
    </div>
  )
}

export default Sidebar