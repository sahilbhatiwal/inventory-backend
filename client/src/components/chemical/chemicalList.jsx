import React from 'react';
import { List, Datagrid, TextField, EditButton ,DeleteButton ,ShowButton} from "react-admin";
export default function chemicalList(props) {
  return (
    <List {...props} pagination={false} bulkActionButtons={false}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="quantity" />
        {/* <TextField source="createdAt" />
        <TextField source="updatedAt" /> */}
        <EditButton basePath="/chemical" />
        <DeleteButton basePath="/chemical"/>
        <ShowButton basePath="/chemical"/>
      </Datagrid>
    </List>
  );
}
