#!/bin/bash

set -e

cd "$( dirname "${0}")/.."

# Regenerate the playlists
npx trigger-repository-dispatch \
  --nwo "swinton/playlists" \
  --event-type "regenerate"
