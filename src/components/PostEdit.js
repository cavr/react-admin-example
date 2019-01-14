import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin'


export const PostEdit = (props) => (
    <Edit { ...props }>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
)

export default PostEdit;