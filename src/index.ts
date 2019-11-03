import glob from 'glob';

import getSpotifyClient from './spotify-client';
import { loadPlaylistSpec, PlaylistSpec } from './load-playlist-spec';

const clientId: string = process.env.SPOTIFY_CLIENT_ID || '';
const clientSecret: string = process.env.SPOTIFY_CLIENT_SECRET || '';
const refreshToken: string = process.env.SPOTIFY_REFRESH_TOKEN || '';

(async () => {
  try {
    // Get Spotify client
    const spotify = await getSpotifyClient(clientId, clientSecret, refreshToken);

    glob('./playlists/*.yml', function(err, specs: string[]) {
      // Iterate over all playlist specs
      specs.forEach(async (spec) => {
        // Load playlist spec
        const playlist: PlaylistSpec = loadPlaylistSpec(spec);

        // Get recommendations
        const { body: { tracks: recommendations } } = await spotify.getRecommendations(playlist.params);

        // Update playlist
        try {
          const { body: response } = await spotify.replaceTracksInPlaylist(
            playlist.id,
            recommendations.map(
              recommendation => recommendation.uri
            )
          );
          console.log(`Created playlist ${ playlist.id } snapshot: ${ (response as {snapshot_id: string}).snapshot_id }`);
        } catch (e) {
          console.log(`Error refreshing playlist ${ playlist.id }: ${ (e as Error).message }`);
        }
      });
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
