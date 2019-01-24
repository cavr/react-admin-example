import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  CreateButton,
  CardActions,
  ReferenceManyField,
  SingleFieldList,
  ChipField
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
      <ReferenceManyField
        label="Reference"
        reference="comments"
        target="post_id"
      >
        <SingleFieldList>
          <ChipField source="author" />
        </SingleFieldList>
      </ReferenceManyField>
      <EditButton />
    </Datagrid>
  </List>
);

export default PostList;
