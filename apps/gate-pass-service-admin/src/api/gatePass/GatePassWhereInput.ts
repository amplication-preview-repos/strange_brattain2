import { AuthorityWhereUniqueInput } from "../authority/AuthorityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type GatePassWhereInput = {
  authority?: AuthorityWhereUniqueInput;
  id?: StringFilter;
  reason?: StringNullableFilter;
  requestDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  student?: StudentWhereUniqueInput;
};
