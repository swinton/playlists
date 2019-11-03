import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const loadPlaylistSpec = function(path: string) {
  // Get document, or throw exception on error
  try {
    return yaml.safeLoad(fs.readFileSync(path, 'utf8'));
  } catch (e) {
    throw e;
  }
};

export default loadPlaylistSpec;
