import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AlbumService } from "./album.service";
import { AlbumControllerBase } from "./base/album.controller.base";

@swagger.ApiTags("albums")
@common.Controller("albums")
export class AlbumController extends AlbumControllerBase {
  constructor(protected readonly service: AlbumService) {
    super(service);
  }
}
