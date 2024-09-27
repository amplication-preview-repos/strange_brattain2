import { GatePassUpdateManyWithoutAuthoritiesInput } from "./GatePassUpdateManyWithoutAuthoritiesInput";

export type AuthorityUpdateInput = {
  email?: string | null;
  gatePasses?: GatePassUpdateManyWithoutAuthoritiesInput;
  name?: string | null;
  role?: string | null;
};
