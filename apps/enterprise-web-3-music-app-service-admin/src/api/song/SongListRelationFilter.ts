import { SongWhereInput } from "./SongWhereInput";

export type SongListRelationFilter = {
  every?: SongWhereInput;
  some?: SongWhereInput;
  none?: SongWhereInput;
};
