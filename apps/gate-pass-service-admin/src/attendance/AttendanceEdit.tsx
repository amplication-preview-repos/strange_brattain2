import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentTitle } from "../student/StudentTitle";

export const AttendanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="entryTime" source="entryTime" />
        <DateTimeInput label="exitTime" source="exitTime" />
        <TextInput label="status" source="status" />
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
