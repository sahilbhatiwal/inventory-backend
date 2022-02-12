import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  required,
  ArrayInput,
  SelectArrayInput,
  SimpleFormIterator,
  SelectInput,
} from "react-admin";
export default function createReport(props) {
  return (
    <Create title="Create a Report" {...props}>
      <SimpleForm>
        <ReferenceInput
          label="user"
          source="user"
          reference="user"
          validate={[required()]}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ArrayInput source="testsPerformed">
          <SimpleFormIterator>
            <ReferenceInput
              label="test"
              source=""
              reference="test"
              validate={[required()]}
            >
              <SelectInput optionText="name" />
            </ReferenceInput>

          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}
