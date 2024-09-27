import { GatePass as TGatePass } from "../api/gatePass/GatePass";

export const GATEPASS_TITLE_FIELD = "status";

export const GatePassTitle = (record: TGatePass): string => {
  return record.status?.toString() || String(record.id);
};
