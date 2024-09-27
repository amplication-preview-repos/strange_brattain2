import { GatePassCreateNestedManyWithoutAuthoritiesInput } from "./GatePassCreateNestedManyWithoutAuthoritiesInput";

export type AuthorityCreateInput = {
  email?: string | null;
  gatePasses?: GatePassCreateNestedManyWithoutAuthoritiesInput;
  name?: string | null;
  role?: string | null;
};
