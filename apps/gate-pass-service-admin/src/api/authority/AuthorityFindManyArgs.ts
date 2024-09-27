import { AuthorityWhereInput } from "./AuthorityWhereInput";
import { AuthorityOrderByInput } from "./AuthorityOrderByInput";

export type AuthorityFindManyArgs = {
  where?: AuthorityWhereInput;
  orderBy?: Array<AuthorityOrderByInput>;
  skip?: number;
  take?: number;
};
