import { Attendance } from "../attendance/Attendance";
import { GatePass } from "../gatePass/GatePass";

export type Student = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  email: string | null;
  gatePasses?: Array<GatePass>;
  id: string;
  name: string | null;
  registrationNumber: string | null;
  updatedAt: Date;
};
