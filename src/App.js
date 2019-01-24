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
  posts: [{ id: 1, name: "Carlos" }],
  comments: [
    {
      post_id: 1,
      author: "Charlie"
    },
    {
      post_id: 1,
      author: "Charles"
    }
  ]
});

const messages = {
  en: {
    hello: "CAVR"
  }
};

const i18nProvider = locale => messages[locale];

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
        i18nProvider={i18nProvider}
        locale="en"
      >
        <Resource
          name="posts"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
        />
        <Resource name="comments" />
      </Admin>
    );
  }
}

export default App;
