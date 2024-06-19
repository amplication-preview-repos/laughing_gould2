import * as graphql from "@nestjs/graphql";
import { AlbumResolverBase } from "./base/album.resolver.base";
import { Album } from "./base/Album";
import { AlbumService } from "./album.service";

@graphql.Resolver(() => Album)
export class AlbumResolver extends AlbumResolverBase {
  constructor(protected readonly service: AlbumService) {
    super(service);
  }
}
