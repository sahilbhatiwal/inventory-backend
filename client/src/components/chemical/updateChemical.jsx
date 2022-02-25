
import React from 'react';
import {
  Edit,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";
export default function updateChemical(props) {
  return (
    <Edit title="Update the chemical" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="quantity" label="Quantity Available" />
        <TextInput source="quantity" label="quantity to add" defaultValue="0"/>

      </SimpleForm>
    </Edit>
  );
}
