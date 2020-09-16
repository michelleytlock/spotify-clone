import React from 'react';
import '../styles/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../StateProvider'

function Sidebar() {
   const [{ playlists }, dispatch] = useDataLayerValue();

   return (
      <div className="sidebar">
         <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify Logo" />
         <SidebarOption Icon={HomeIcon} text="Home" />
         <SidebarOption Icon={SearchIcon} text="Search" />
         <SidebarOption Icon={LibraryMusicIcon} text="Your Library" />
         
         <br />
         <strong className="sidebar__title">PLAYLISTS</strong>
         <SidebarOption text="Create Playlist" />
         <SidebarOption text="Liked Songs" />
         <hr />

         {playlists?.items?.map((playlist) => (
            <SidebarOption text={playlist.name} />
         ))}
      </div>
   )
}

export default Sidebar
