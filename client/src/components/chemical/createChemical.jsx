import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";
export default function createChemical(props) {
  return (
    <Create title="Create a Chemical" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="quantity" />
      </SimpleForm>
    </Create>
  );
}
