/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Album } from "./Album";
import { AlbumCountArgs } from "./AlbumCountArgs";
import { AlbumFindManyArgs } from "./AlbumFindManyArgs";
import { AlbumFindUniqueArgs } from "./AlbumFindUniqueArgs";
import { DeleteAlbumArgs } from "./DeleteAlbumArgs";
import { AlbumService } from "../album.service";
@graphql.Resolver(() => Album)
export class AlbumResolverBase {
  constructor(protected readonly service: AlbumService) {}

  async _albumsMeta(
    @graphql.Args() args: AlbumCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Album])
  async albums(@graphql.Args() args: AlbumFindManyArgs): Promise<Album[]> {
    return this.service.albums(args);
  }

  @graphql.Query(() => Album, { nullable: true })
  async album(
    @graphql.Args() args: AlbumFindUniqueArgs
  ): Promise<Album | null> {
    const result = await this.service.album(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Album)
  async deleteAlbum(
    @graphql.Args() args: DeleteAlbumArgs
  ): Promise<Album | null> {
    try {
      return await this.service.deleteAlbum(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}