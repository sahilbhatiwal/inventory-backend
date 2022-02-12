
import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ArrayField,
  Datagrid,
  DateField,
} from "react-admin";
export default function viewReport(props) {
  return (
    <Show title="View Report" {...props}>
      <SimpleShowLayout>
        <TextField source="_id" />
        <TextField source="user.name" label="username" />
        <TextField source="user.phone" label="phone no" />
        <DateField label="Date" source="createdAt" />
        <ArrayField source="testsPerformed">
          <Datagrid>
            <TextField source="name" />
            <TextField source="price" />
          </Datagrid>
        </ArrayField>
        <TextField source="totalAmount" label="Total Amount" />
      </SimpleShowLayout>
    </Show>
  );
}
