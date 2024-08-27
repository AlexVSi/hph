import React from 'react';
import { Datagrid, DeleteButton, EditButton, FunctionField, List, TextField } from "react-admin"
import { MultiLangFieldRender } from '../../shared/multiLangFieldRender/multiLangFieldRender';

export const ProductList: React.FC = (props) => {
    return (
        <List {...props}>
        <Datagrid>
            <TextField source="articleNumber" label="Артикул"/>
            <FunctionField
                label='Наименование'
                // render={(record) => <p>Ru: {record.name.ru} <br/>  Ro: {record.name.ro} <br/> En: {record.name.en}</p>}
                render={(record) => <MultiLangFieldRender record={record} field='name'/>}
            />
            <TextField source="amount" label="Кол-во"/>
            <TextField source="price" label="Цена"/>
            <TextField source="sale" label="Скидка"/>
            <FunctionField
                label="Описание"
                render={(record) => <MultiLangFieldRender record={record} field='description'/>}
            />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
    )
}