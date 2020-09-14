//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//throw user over to spotify to log in
export const authEndpoint = "https://accounts.spotify.com/authorize";

// after login authorization, will redirect back to clone
const redirectURI = "http://localhost:3000/";

const clientId = "1d8bfe66ed5a4edd98969459802df6c3";

// SCOPES for the clone, what the clone will have access to do
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// need to get the access token from the response url (after spotify authenticates and redirects)
export const getTokenFromURL = () => {
   // window.location.hash finds the hash in the response url
   return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
         let parts = item.split('=');
         initial[parts[0]] = decodeURIComponent(parts[1]) // go into access token (parts[0]) and decode the key (parts[1])
         return initial;
      }, {});
}

// the url for the spotify login button on homepage
export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
