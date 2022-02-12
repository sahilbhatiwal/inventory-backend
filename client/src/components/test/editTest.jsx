import React from "react";
import {
  Edit,
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
export default function EditTest(props) {
  return (
    <Edit title="Edit  Test" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="price" />
        <ArrayInput source="chemicalsRequired">
          <SimpleFormIterator>
            <TextInput source="chemical.name" disabled />
            <ReferenceInput
              label="chemical"
              source="chemical"
              reference="chemical"
              //   validate={[required()]}
            >
              <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="quantity" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
}
