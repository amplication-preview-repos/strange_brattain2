import { SortOrder } from "../../util/SortOrder";

export type GatePassOrderByInput = {
  authorityId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  reason?: SortOrder;
  requestDate?: SortOrder;
  status?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
