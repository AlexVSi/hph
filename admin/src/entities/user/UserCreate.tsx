import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const UserCreate: React.FC = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);
