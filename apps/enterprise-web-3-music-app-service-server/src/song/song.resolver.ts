import * as graphql from "@nestjs/graphql";
import { SongResolverBase } from "./base/song.resolver.base";
import { Song } from "./base/Song";
import { SongService } from "./song.service";

@graphql.Resolver(() => Song)
export class SongResolver extends SongResolverBase {
  constructor(protected readonly service: SongService) {
    super(service);
  }
}
