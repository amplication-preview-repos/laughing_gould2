import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SongService } from "./song.service";
import { SongControllerBase } from "./base/song.controller.base";

@swagger.ApiTags("songs")
@common.Controller("songs")
export class SongController extends SongControllerBase {
  constructor(protected readonly service: SongService) {
    super(service);
  }
}
