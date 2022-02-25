import React from 'react';
import { List, Datagrid, TextField, EditButton ,DeleteButton ,ShowButton} from "react-admin";
export default function chemicalList(props) {
  return (
    <List {...props} pagination={false} bulkActionButtons={false}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="quantity" />
        <EditButton basePath="/chemical" />
        <DeleteButton basePath="/chemical"/>
        <ShowButton basePath="/chemical"/>
      </Datagrid>
    </List>
  );
}
