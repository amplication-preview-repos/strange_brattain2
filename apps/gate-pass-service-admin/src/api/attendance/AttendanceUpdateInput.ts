import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AttendanceUpdateInput = {
  entryTime?: Date | null;
  exitTime?: Date | null;
  status?: string | null;
  student?: StudentWhereUniqueInput | null;
};
