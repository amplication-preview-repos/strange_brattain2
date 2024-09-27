import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AttendanceWhereInput = {
  entryTime?: DateTimeNullableFilter;
  exitTime?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  student?: StudentWhereUniqueInput;
};
