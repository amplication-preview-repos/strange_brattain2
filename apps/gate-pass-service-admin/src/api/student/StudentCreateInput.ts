import { AttendanceCreateNestedManyWithoutStudentsInput } from "./AttendanceCreateNestedManyWithoutStudentsInput";
import { GatePassCreateNestedManyWithoutStudentsInput } from "./GatePassCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutStudentsInput;
  email?: string | null;
  gatePasses?: GatePassCreateNestedManyWithoutStudentsInput;
  name?: string | null;
  registrationNumber?: string | null;
};
