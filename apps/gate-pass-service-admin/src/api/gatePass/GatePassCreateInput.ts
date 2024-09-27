import { AuthorityWhereUniqueInput } from "../authority/AuthorityWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type GatePassCreateInput = {
  authority?: AuthorityWhereUniqueInput | null;
  reason?: string | null;
  requestDate?: Date | null;
  status?: string | null;
  student?: StudentWhereUniqueInput | null;
};
