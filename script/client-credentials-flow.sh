#!/bin/sh

# Client Credentials Flow
# The Client Credentials flow is used in server-to-server authentication. Only endpoints that do not access user information can be accessed. The advantage here in comparison with requests to the Web API made without an access token, is that a higher rate limit is applied.
# https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow

access_token=$( curl --silent \
  --request POST \
  --url https://accounts.spotify.com/api/token \
  --header "authorization: Basic ${SPOTIFY_AUTH}" \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data "grant_type=client_credentials" \
  | jq .access_token --raw-output )

export SPOTIFY_ACCESS_TOKEN=$access_token

echo $access_token
