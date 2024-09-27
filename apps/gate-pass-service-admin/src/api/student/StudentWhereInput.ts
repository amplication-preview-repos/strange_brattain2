import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GatePassListRelationFilter } from "../gatePass/GatePassListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentWhereInput = {
  attendances?: AttendanceListRelationFilter;
  email?: StringNullableFilter;
  gatePasses?: GatePassListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  registrationNumber?: StringNullableFilter;
};
