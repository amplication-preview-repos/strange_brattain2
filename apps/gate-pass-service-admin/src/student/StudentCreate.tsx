import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { GatePassTitle } from "../gatePass/GatePassTitle";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="attendances" reference="Attendance">
          <SelectArrayInput
            optionText={AttendanceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput source="gatePasses" reference="GatePass">
          <SelectArrayInput
            optionText={GatePassTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="registrationNumber" source="registrationNumber" />
      </SimpleForm>
    </Create>
  );
};
