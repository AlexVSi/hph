import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEdit: React.FC = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);