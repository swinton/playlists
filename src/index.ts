import getSpotifyClient from './spotify-client';
import loadPlaylistSpec from './load-playlist-spec';

const clientId: string = process.env.SPOTIFY_CLIENT_ID || '';
const clientSecret: string = process.env.SPOTIFY_CLIENT_SECRET || '';
const refreshToken: string = process.env.SPOTIFY_REFRESH_TOKEN || '';

(async () => {
  try {
    // Get Spotify client
    const spotify = await getSpotifyClient(clientId, clientSecret, refreshToken);

    // Load playlist spec
    const playlist = loadPlaylistSpec('folk.yml');

    // Get recommendations
    const { body: { tracks: recommendations } } = await spotify.getRecommendations(playlist.params);

    // Update playlist
    const response = await spotify.replaceTracksInPlaylist(
      playlist.id,
      recommendations.map(
        recommendation => recommendation.uri
      )
    );
    console.log(response);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
