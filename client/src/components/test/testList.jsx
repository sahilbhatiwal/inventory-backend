import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ArrayField,
  DeleteButton,
  ShowButton,
} from "react-admin";
export default function testList(props) {
  return (
    <List {...props} pagination={false} bulkActionButtons={false}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="price" />
        
        <EditButton basePath="/test" />
        <DeleteButton basePath="/test" />
        <ShowButton basePath="/test" />
      </Datagrid>
    </List>
  );
}
