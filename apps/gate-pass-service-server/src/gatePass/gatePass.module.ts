import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GatePassModuleBase } from "./base/gatePass.module.base";
import { GatePassService } from "./gatePass.service";
import { GatePassController } from "./gatePass.controller";
import { GatePassResolver } from "./gatePass.resolver";

@Module({
  imports: [GatePassModuleBase, forwardRef(() => AuthModule)],
  controllers: [GatePassController],
  providers: [GatePassService, GatePassResolver],
  exports: [GatePassService],
})
export class GatePassModule {}
