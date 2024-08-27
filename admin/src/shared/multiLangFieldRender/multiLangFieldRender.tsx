import React, { FC } from 'react'

interface IMultiLangFieldRender {
    record: any
    field: string
}

export const MultiLangFieldRender: FC<IMultiLangFieldRender> = ({ record, field }) => {
    return (
        <p>Ru: {record[field].ru} <br />  Ro: {record[field].ro} <br /> En: {record[field].en}</p>
    )
}