import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const Example = props => {   
  const { history: {push}} = props; 
  return (
    <Fragment>
      <h1> Hello </h1>
      <Link to="/">Main</Link>
      <button onClick={() => push("/")}>Main</button>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Example)
);
