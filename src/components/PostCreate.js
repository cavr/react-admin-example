import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { connect } from "react-redux";

export const PostCreate = props => {
  console.log(props);
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
