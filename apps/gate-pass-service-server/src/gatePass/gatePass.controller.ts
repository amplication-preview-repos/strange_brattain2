import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GatePassService } from "./gatePass.service";
import { GatePassControllerBase } from "./base/gatePass.controller.base";

@swagger.ApiTags("gatePasses")
@common.Controller("gatePasses")
export class GatePassController extends GatePassControllerBase {
  constructor(
    protected readonly service: GatePassService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
