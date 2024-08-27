import React, { FC } from 'react'
import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin';

export const CategoryList: FC = (props) => {
    return (
        <List {...props}>
        <Datagrid>
            <TextField source="category.ru" label='Категория'/>
            <TextField source="sale" label='Скидка'/>
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
    )
}