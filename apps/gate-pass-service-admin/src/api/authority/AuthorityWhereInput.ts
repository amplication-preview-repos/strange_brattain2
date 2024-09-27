import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GatePassListRelationFilter } from "../gatePass/GatePassListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuthorityWhereInput = {
  email?: StringNullableFilter;
  gatePasses?: GatePassListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
};
