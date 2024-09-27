import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GatePassServiceBase } from "./base/gatePass.service.base";

@Injectable()
export class GatePassService extends GatePassServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
