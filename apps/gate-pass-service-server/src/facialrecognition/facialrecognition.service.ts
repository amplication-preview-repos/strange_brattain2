import { Injectable } from "@nestjs/common";

@Injectable()
export class FacialRecognitionService {
  constructor() {}
  async RecognizeFace(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
