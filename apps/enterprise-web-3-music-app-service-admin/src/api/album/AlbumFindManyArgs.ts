import { AlbumWhereInput } from "./AlbumWhereInput";
import { AlbumOrderByInput } from "./AlbumOrderByInput";

export type AlbumFindManyArgs = {
  where?: AlbumWhereInput;
  orderBy?: Array<AlbumOrderByInput>;
  skip?: number;
  take?: number;
};
