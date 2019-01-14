import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import fakeDataProvider from "ra-data-fakerest";
import PostList from "./components/PostList";
import PostEdit from "./components/PostEdit";
import PostCreate from "./components/PostCreate";
import authProvider from "./providers/authProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import { example } from "./reducers/index";
import customRoutes from "./customRoutes";
import createHistory from "history/createBrowserHistory";
import AdminMenu from "./components/AdminMenu";

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

const history = createHistory();

const dataProvider = fakeDataProvider({
  posts: [{ id: 1, name: "Carlos" }]
});

class App extends Component {
  render() {
    return (
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        theme={theme}
        customReducers={{ example }}
        customRoutes={customRoutes}
        history={history}
        appLayout={AdminMenu}
      >
        <Resource
          name="posts"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
        />
      </Admin>
    );
  }
}

export default App;
