import { Authority } from "../authority/Authority";
import { Student } from "../student/Student";

export type GatePass = {
  authority?: Authority | null;
  createdAt: Date;
  id: string;
  reason: string | null;
  requestDate: Date | null;
  status: string | null;
  student?: Student | null;
  updatedAt: Date;
};
