import getSpotifyClient from './spotify-client';
import loadPlaylistSpec from './load-playlist-spec';

const clientId: string = process.env.SPOTIFY_CLIENT_ID || '';
const clientSecret: string = process.env.SPOTIFY_CLIENT_SECRET || '';
const refreshToken: string = process.env.SPOTIFY_REFRESH_TOKEN || '';

(async () => {
  try {
    const spotify = await getSpotifyClient(clientId, clientSecret, refreshToken);
    const spec = loadPlaylistSpec('folk.yml');
    const { body: { tracks: recommendations } } = await spotify.getRecommendations(spec);
    console.log(recommendations);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
