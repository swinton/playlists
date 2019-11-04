# `playlists`
> :headphones: :relaxed: Playlists on Spotify, automatically regenerated every week using GitHub Actions

## What is this even about?

Spotify _genre radio_ (where you could listen to a continuous stream of songs of a particular genre) used to be a thing, and now I'm bringing it back!

[Playlists in this repo are defined using _seed data_](playlists) and regenerated every Monday, using [the Spotify recommendations API](https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/).

## Example

Here's [the _seed data_](playlists/folk.yml) for [the _folk_ playlist](https://open.spotify.com/playlist/3vvtpYZWVdHKcU1rdZaYYE):

```yaml
params:
  limit: 100
  seed_genres: folk
  market: from_token
```

## Can I use this to generate my own Spotify playlists?

Absolutely! This is open source, so feel free to fork, reuse, and remix as much as you like. Also, since it's built using [GitHub Actions](https://help.github.com/en/github/automating-your-workflow-with-github-actions/about-github-actions), you can also just reference this repo in your workflow to regenerate your own playlists, e.g.

```yaml
    - name: Regenerate
      uses: swinton/playlists@master
      env:
        SPOTIFY_CLIENT_ID: ${{ secrets.SPOTIFY_CLIENT_ID }}
        SPOTIFY_CLIENT_SECRET: ${{ secrets.SPOTIFY_CLIENT_SECRET }}
        SPOTIFY_REFRESH_TOKEN: ${{ secrets.SPOTIFY_REFRESH_TOKEN }}
```

Where:

1. `SPOTIFY_CLIENT_ID`: A Spotify Client ID, created via [developer.spotify.com](https://developer.spotify.com/dashboard/applications).
1. `SPOTIFY_CLIENT_SECRET`: The Client Secret associated with your Client ID.
1. `SPOTIFY_REFRESH_TOKEN`: A refresh token, generated through a call to the Spotify Accounts Service `/authorize` endpoint, having `playlist-modify-public,playlist-modify-private` scope. More details on this _Authorization Code Flow_ can be found [here](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow).

## Resources

- [Authorization Guide | Spotify for Developers](https://developer.spotify.com/documentation/general/guides/authorization-guide/)
- [Get Recommendations Based on Seeds | Spotify for Developers](https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/)
