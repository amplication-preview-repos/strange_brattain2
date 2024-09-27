import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AuthorityTitle } from "../authority/AuthorityTitle";
import { StudentTitle } from "../student/StudentTitle";

export const GatePassEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="authority.id"
          reference="Authority"
          label="Authority"
        >
          <SelectInput optionText={AuthorityTitle} />
        </ReferenceInput>
        <TextInput label="reason" multiline source="reason" />
        <DateTimeInput label="requestDate" source="requestDate" />
        <TextInput label="status" source="status" />
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
