import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi(); // creates Spotify inside app

function App() {
  const [token, setToken] = useState(null);

  // Run code based on a given condition:
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = ""; //clear url for security reasons and access token is kept private
    console.log("I HAVE A HASH!!!! 😇", hash);

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("😆", user);
      });
    }

    console.log("I HAVE A TOKEN!!!! 🖐", token);
  }, []); // will run once if [] is empty. if it has [name, age] it will run everytime name or age changes.

  return <div className="app">{token ? <h1>Logged In!</h1> : <Login />}</div>;
}

export default App;
