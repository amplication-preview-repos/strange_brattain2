import { GatePass } from "../gatePass/GatePass";

export type Authority = {
  createdAt: Date;
  email: string | null;
  gatePasses?: Array<GatePass>;
  id: string;
  name: string | null;
  role: string | null;
  updatedAt: Date;
};
