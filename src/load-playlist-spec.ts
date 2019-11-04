import fs from "fs";
import yaml from "js-yaml";

export interface PlaylistSpec {
  id: string;
  params: { limit: number; seed_genres: string; market: string };
}

export const loadPlaylistSpec = function(path: string): PlaylistSpec {
  // Get document, or throw exception on error
  try {
    return yaml.safeLoad(fs.readFileSync(path, "utf8"));
  } catch (e) {
    throw e;
  }
};

export default loadPlaylistSpec;
