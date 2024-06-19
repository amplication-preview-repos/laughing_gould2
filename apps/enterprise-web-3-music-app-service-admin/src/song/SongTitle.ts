import { Song as TSong } from "../api/song/Song";

export const SONG_TITLE_FIELD = "id";

export const SongTitle = (record: TSong): string => {
  return record.id?.toString() || String(record.id);
};
