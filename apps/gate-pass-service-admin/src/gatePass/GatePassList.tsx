import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AUTHORITY_TITLE_FIELD } from "../authority/AuthorityTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const GatePassList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GatePasses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Authority"
          source="authority.id"
          reference="Authority"
        >
          <TextField source={AUTHORITY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="reason" source="reason" />
        <TextField label="requestDate" source="requestDate" />
        <TextField label="status" source="status" />
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
