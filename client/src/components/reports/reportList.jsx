import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ShowButton,
} from "react-admin";
export default function reportList(props) {
  return (
    <List {...props} pagination={false} bulkActionButtons={false}>
      <Datagrid>
        <TextField source="_id" />
        <TextField source="user.name" label="username" />
        <TextField source="user.phone" label="phone no" />
        <TextField source="totalAmount" label="amount" />
        <ShowButton basePath="/report" />
      </Datagrid>
    </List>
  );
}
