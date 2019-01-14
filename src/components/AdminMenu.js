import React from "react";
import { connect } from "react-redux";
import { MenuItemLink, getResources, Responsive } from "react-admin";
import { withRouter } from "react-router-dom";
import { Layout } from "react-admin";

const AdminMenu = props => {
  const { resourcer, showMenu } = props;
  console.log(props);

  const menu = showMenu ? (
    <div>
      {resourcer.map((resource, index) => (
        <MenuItemLink
          key={index}
          to={`/${resource.name}`}
          primaryText={resource.name}
        />
      ))}
      <MenuItemLink to="/example" primaryText="Example" />
    </div>
  ) : (
    ""
  );

  return (
    <div>
      {menu}
      <Responsive small={null} medium={null} />
    </div>
  );
};

const mapStateToProps = state => {  
  return {
    resourcer: getResources(state),
    showMenu: state.admin.ui ? state.admin.ui.sidebarOpen : true
  };
};

const Menu = withRouter(connect(mapStateToProps)(AdminMenu));

const AdminLayoutMenu = props => <Layout {...props} menu={Menu} />;

export default AdminLayoutMenu;
