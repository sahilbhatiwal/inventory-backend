import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ShowButton,
} from "react-admin";
export default function userList(props) {
  return (
    <List {...props} pagination={false} bulkActionButtons={false}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="phone" />
        <ShowButton basePath="/user" />
      </Datagrid>
    </List>
  );
}
