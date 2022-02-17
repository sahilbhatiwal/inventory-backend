import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
export default function createUser(props) {
  return (
    <Create title="Create a User" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="phone" />
        <TextInput source="email" />
        <TextInput source="password" />
      </SimpleForm>
    </Create>
  );
}
