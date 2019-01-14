import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  CreateButton,
  CardActions
} from "react-admin";

const PostActions = ({ basePath }) => (
  <CardActions>
    <CreateButton basePath={basePath} />
  </CardActions>
);

export const PostList = props => (
  <List {...props} actions={<PostActions />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

export default PostList;
