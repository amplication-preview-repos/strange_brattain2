import * as graphql from "@nestjs/graphql";
import { FacialRecognitionService } from "./facialrecognition.service";

export class FacialRecognitionResolver {
  constructor(protected readonly service: FacialRecognitionService) {}

  @graphql.Mutation(() => String)
  async RecognizeFace(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.RecognizeFace(args);
  }
}
