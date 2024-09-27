import { Attendance as TAttendance } from "../api/attendance/Attendance";

export const ATTENDANCE_TITLE_FIELD = "status";

export const AttendanceTitle = (record: TAttendance): string => {
  return record.status?.toString() || String(record.id);
};
