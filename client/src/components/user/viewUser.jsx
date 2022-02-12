import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  
} from "react-admin";
export default function viewUser(props) {
  return (
    <Show title="View User" {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="phone" />
        
      </SimpleShowLayout>
    </Show>
  );
}
