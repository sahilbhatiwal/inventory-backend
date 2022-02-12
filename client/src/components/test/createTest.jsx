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
export default function createTest(props) {
  return (
    <Create title="Create a Test" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="price" />
        <ArrayInput source="chemicalsRequired">
          <SimpleFormIterator>
            <ReferenceInput
              label="chemical"
              source="chemical"
              reference="chemical"
              validate={[required()]}
            >
              <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="quantity" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}
