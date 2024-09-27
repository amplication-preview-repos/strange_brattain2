import { Authority as TAuthority } from "../api/authority/Authority";

export const AUTHORITY_TITLE_FIELD = "name";

export const AuthorityTitle = (record: TAuthority): string => {
  return record.name?.toString() || String(record.id);
};
