import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import SearchInput from "../SearchInput";

class App extends React.Component {
  public render() {
    return (
      <AppBar>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Typography variant="title" color="inherit">
              Title
            </Typography>
          </div>
          <SearchInput />
          <div style={{ flexGrow: 3 }} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default App;
