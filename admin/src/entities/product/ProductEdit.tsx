import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ProductEdit: React.FC = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name.ru" />
            <TextInput source="name.ro" />
            <TextInput source="name.en" />
            {/* <TextInput source="email" /> */}
        </SimpleForm>
    </Edit>
);