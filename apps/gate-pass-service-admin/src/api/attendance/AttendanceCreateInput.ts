import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AttendanceCreateInput = {
  entryTime?: Date | null;
  exitTime?: Date | null;
  status?: string | null;
  student?: StudentWhereUniqueInput | null;
};
