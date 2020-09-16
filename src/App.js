import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from './StateProvider'

const spotify = new SpotifyWebApi(); // creates Spotify inside app

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code based on a given condition:
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = ""; //clear url for security reasons and access token is kept private

    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);
      
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        }) // dispatch to data layer
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcPGObtqm32rr').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })
    }

  }, []); // will run once if [] is empty. if it has [name, age] it will run everytime name or age changes.

  return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
