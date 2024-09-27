import { Student } from "../student/Student";

export type Attendance = {
  createdAt: Date;
  entryTime: Date | null;
  exitTime: Date | null;
  id: string;
  status: string | null;
  student?: Student | null;
  updatedAt: Date;
};
