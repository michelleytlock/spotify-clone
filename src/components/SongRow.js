import React from 'react';
import '../styles/SongRow.css'

function SongRow({track}) {
   return (
      <div className="songRow">
         <img className="songRow__album" src={track.album.images[0].url} alt={track.album.name} />
         <div className="songRow__info">
            <h1>{track.name}</h1>
            <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
            <p>{track.album.name}</p>
         </div>
      </div>
   )
}

export default SongRow
