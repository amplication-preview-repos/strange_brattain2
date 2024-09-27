import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuthorityModuleBase } from "./base/authority.module.base";
import { AuthorityService } from "./authority.service";
import { AuthorityController } from "./authority.controller";
import { AuthorityResolver } from "./authority.resolver";

@Module({
  imports: [AuthorityModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuthorityController],
  providers: [AuthorityService, AuthorityResolver],
  exports: [AuthorityService],
})
export class AuthorityModule {}
