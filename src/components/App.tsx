import * as React from "react";

import Navbar from "./Navbar";
import { Provider } from "react-redux";
import Sidebar from "./Sidebar";
import { store } from "../services/store";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <Sidebar />
          Text
        </div>
      </Provider>
    );
  }
}

export default App;
