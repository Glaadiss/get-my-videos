import * as React from "react";

import Navbar from "./Navbar";
import { Provider } from "react-redux";
import Sidebar from "./Sidebar";
import { store } from "../services/store";
import Content from "./Content";
import { loadYoutubeApi, signInListen } from "../services/gapi";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Actions } from "../services/actions/user";
import { Actions as videosActions } from "../services/actions/videos";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      colorInherit: "#fff" as any
    }
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#fff",
      main: "#eee",
      dark: "#ddd",
      contrastText: "#3f50b5"
    }
  }
});

type S = {
  hasError: boolean;
};

class App extends React.Component<{}, S> {
  public state = {
    hasError: false
  };

  public async componentDidMount() {
    try {
      await LoadYT();
      getInitialVideos();
    } catch (error) {
      console.log(error);
      this.setState({ hasError: true });
    }
  }

  public componentDidCatch(err: any, info: any) {
    console.log(err, info);
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div>
            <Navbar />
            <Sidebar />
            <Content />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

async function LoadYT() {
  await loadYoutubeApi();
  signInListen((isSigned: boolean) => {
    store.dispatch(isSigned ? Actions.signIn() : Actions.signOut());
  });
}

function getInitialVideos() {
  store.dispatch(videosActions.getPopularVideos());
}

export default App;
