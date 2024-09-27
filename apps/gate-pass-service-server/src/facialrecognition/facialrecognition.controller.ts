import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FacialRecognitionService } from "./facialrecognition.service";

@swagger.ApiTags("facialRecognitions")
@common.Controller("facialRecognitions")
export class FacialRecognitionController {
  constructor(protected readonly service: FacialRecognitionService) {}

  @common.Post("/recognize-face")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RecognizeFace(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RecognizeFace(body);
      }
}
