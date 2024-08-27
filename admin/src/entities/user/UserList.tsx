import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton, ReferenceField, FunctionField } from 'react-admin';

export const UserList: React.FC = (props) => (
    <List {...props}>
        <Datagrid>
            {/* <NameField source='Name' name={{firstname: 'firstname', lastname: 'lastname'}}/> */}
            <FunctionField
                label="Имя"
                render={(record) => `${record.firstname} ${record.lastname}`}
            />
            <EmailField source="email" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);