import React from "react";
import { connect } from "react-redux";

const Example = props => {
  console.log(props);
  return <h1> Hello </h1>;
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(
  mapStateToProps,
  null
)(Example);
