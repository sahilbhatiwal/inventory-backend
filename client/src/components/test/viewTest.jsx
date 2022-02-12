import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ArrayField,
  Datagrid,
} from "react-admin";
export default function viewTest(props) {
  return (
    <Show title="View Test" {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="price" />

        <ArrayField source="chemicalsRequired">
          <Datagrid>
            <TextField source="chemical.name"  />
            <TextField source="quantity" />
          </Datagrid>
        </ArrayField>
      </SimpleShowLayout>
    </Show>
  );
}
