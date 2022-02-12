import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField } from "react-admin";
export default function viewChemical(props) {
  return (
    <Show title="View Chemical" {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="quantity" />
        <DateField label="Added on" source="createdAt" />
        <DateField label="Updated on" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
}
