import React from "react";
import { Edit, SimpleForm, TextInput, translate } from "react-admin";

const PostEdit = ({ translate, ...props }) => (
  <div>
    <strong>{translate("hello")}</strong>
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" label={translate("hello")} />
      </SimpleForm>
    </Edit>
  </div>
);

export default translate(PostEdit);
