import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuthorityService } from "./authority.service";
import { AuthorityControllerBase } from "./base/authority.controller.base";

@swagger.ApiTags("authorities")
@common.Controller("authorities")
export class AuthorityController extends AuthorityControllerBase {
  constructor(
    protected readonly service: AuthorityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
