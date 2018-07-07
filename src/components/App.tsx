import * as React from "react";

import Navbar from "./Navbar";
import { Provider } from "react-redux";
import Sidebar from "./Sidebar";
import { store } from "../services/store";
import Content from "./Content";
import { loadYoutubeApi } from "../services/gapi";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#fff"
    }
  }
});

class App extends React.Component {
  public componentDidMount() {
    loadYoutubeApi();
  }
  public render() {
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

export default App;
