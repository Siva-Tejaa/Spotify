export const SPOTIFY_LOGIN_URL = `https://accounts.spotify.com/authorize?`;

// export const REDIRECT_URL_AFTER_LOGIN = `http://localhost:5173/callback`;

export const REDIRECT_URL_AFTER_LOGIN = `https://spotifytunes.vercel.app/callback`;

export const SCOPE = "user-read-private user-read-email";

export const SPOTIFY_AUTHORIZATION_URL = `${SPOTIFY_LOGIN_URL}client_id=${
  import.meta.env.VITE_CLIENT_ID
}&response_type=token&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE}&show_dialog=true`;

//Spotify API EndPoints
export const CURRENT_USER_PROFILE = `https://api.spotify.com/v1/me`;

export const FEATURED_PLAYLISTS = `https://api.spotify.com/v1/browse/featured-playlists`;

export const GET_PLAYLIST = `https://api.spotify.com/v1/playlists/`;
