import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const loadPlaylistSpec = function(filename: string) {
  // Get document, or throw exception on error
  try {
    return yaml.safeLoad(fs.readFileSync(path.join(__dirname, '..', 'playlists', filename), 'utf8'));
  } catch (e) {
    throw e;
  }
};

export default loadPlaylistSpec;
