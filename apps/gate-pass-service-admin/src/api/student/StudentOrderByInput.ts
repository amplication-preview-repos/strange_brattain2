import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  registrationNumber?: SortOrder;
  updatedAt?: SortOrder;
};
