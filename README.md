# `playlists`
> :headphones: :relaxed: Playlists on Spotify, automatically regenerated every day using GitHub Actions

## About

TBD.

## Usage

TBD.

## Regenerating the playlists

The [playlists](playlists) are regenerated automatically every Monday.

They can also be regenerated _on-demand_ using [`npx trigger-repository-dispatch`](https://github.com/swinton/trigger-repository-dispatch), e.g.:

```shell
GITHUB_TOKEN=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN npx trigger-repository-dispatch \
  --nwo "swinton/playlists" \
  --event-type "regenerate"
```

## Resources
- [Authorization Guide | Spotify for Developers](https://developer.spotify.com/documentation/general/guides/authorization-guide/)
- [Get Recommendations Based on Seeds | Spotify for Developers](https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/)
