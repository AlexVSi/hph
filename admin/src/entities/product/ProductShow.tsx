import { Show, SimpleShowLayout, TextField, DateField, RichTextField } from 'react-admin';

export const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="articleNumber" />
            <TextField source="name.ru" />
            {/* <RichTextField source="body" /> */}
            {/* <DateField label="Publication date" source="published_at" /> */}
        </SimpleShowLayout>
    </Show>
);