import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ArrayField,
  Datagrid,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  ShowButton,
} from "react-admin";
export default function viewUser(props) {
  return (
    <Show title="View User" {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="phone" />
        <TextField source="email" />
        <ReferenceArrayField
          label="Reports done till now"
          reference="report"
          source="reports"
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="totalAmount" />
            <ShowButton basePath="/report" />

          </Datagrid>
        </ReferenceArrayField>
      </SimpleShowLayout>
    </Show>
  );
}
