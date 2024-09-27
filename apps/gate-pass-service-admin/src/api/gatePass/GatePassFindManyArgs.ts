import { GatePassWhereInput } from "./GatePassWhereInput";
import { GatePassOrderByInput } from "./GatePassOrderByInput";

export type GatePassFindManyArgs = {
  where?: GatePassWhereInput;
  orderBy?: Array<GatePassOrderByInput>;
  skip?: number;
  take?: number;
};
