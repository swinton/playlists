import SpotifyWebApi from 'spotify-web-api-node';

export const getSpotifyClient = async function(clientId: string, clientSecret: string, refreshToken: string) {
  // Construct client
  const spotifyApi = new SpotifyWebApi({
    clientId,
    clientSecret
  });

  // Set the refresh token
  spotifyApi.setRefreshToken(refreshToken);

  // Get an access token
  try {
    const { body: { access_token: accessToken } } = await spotifyApi.refreshAccessToken();
    spotifyApi.setAccessToken(accessToken);
  } catch (e) {
    throw(e);
  }

  return spotifyApi;
};

export default getSpotifyClient;
