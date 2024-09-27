import { Module } from "@nestjs/common";
import { FacialRecognitionService } from "./facialrecognition.service";
import { FacialRecognitionController } from "./facialrecognition.controller";
import { FacialRecognitionResolver } from "./facialrecognition.resolver";

@Module({
  controllers: [FacialRecognitionController],
  providers: [FacialRecognitionService, FacialRecognitionResolver],
  exports: [FacialRecognitionService],
})
export class FacialRecognitionModule {}
