import React, { Fragment } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { connect } from "react-redux";

export const PostCreate = props => {
  console.log(props);
  const { state, dispatch, ...properties } = props;
  return (
    <Fragment>
      <pre>{JSON.stringify(state,null, 2)}</pre>
      <Create {...properties}>
        <SimpleForm>
          <TextInput source="name" />
        </SimpleForm>
      </Create>
    </Fragment>
  );
};
const mapStateToProps = state => {
  debugger;
  return { state: { ...state } };
};

export default connect(
  mapStateToProps,
  null
)(PostCreate);
