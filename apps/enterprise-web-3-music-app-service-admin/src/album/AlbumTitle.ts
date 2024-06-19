import { Album as TAlbum } from "../api/album/Album";

export const ALBUM_TITLE_FIELD = "id";

export const AlbumTitle = (record: TAlbum): string => {
  return record.id?.toString() || String(record.id);
};
