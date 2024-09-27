import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthorityServiceBase } from "./base/authority.service.base";

@Injectable()
export class AuthorityService extends AuthorityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
