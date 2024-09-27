import { AttendanceUpdateManyWithoutStudentsInput } from "./AttendanceUpdateManyWithoutStudentsInput";
import { GatePassUpdateManyWithoutStudentsInput } from "./GatePassUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutStudentsInput;
  email?: string | null;
  gatePasses?: GatePassUpdateManyWithoutStudentsInput;
  name?: string | null;
  registrationNumber?: string | null;
};
