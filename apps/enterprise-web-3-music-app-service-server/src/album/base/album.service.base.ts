/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Album as PrismaAlbum } from "@prisma/client";

export class AlbumServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AlbumCountArgs, "select">): Promise<number> {
    return this.prisma.album.count(args);
  }

  async albums(args: Prisma.AlbumFindManyArgs): Promise<PrismaAlbum[]> {
    return this.prisma.album.findMany(args);
  }
  async album(args: Prisma.AlbumFindUniqueArgs): Promise<PrismaAlbum | null> {
    return this.prisma.album.findUnique(args);
  }
  async createAlbum(args: Prisma.AlbumCreateArgs): Promise<PrismaAlbum> {
    return this.prisma.album.create(args);
  }
  async updateAlbum(args: Prisma.AlbumUpdateArgs): Promise<PrismaAlbum> {
    return this.prisma.album.update(args);
  }
  async deleteAlbum(args: Prisma.AlbumDeleteArgs): Promise<PrismaAlbum> {
    return this.prisma.album.delete(args);
  }
}